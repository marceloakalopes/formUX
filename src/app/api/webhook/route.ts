import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Secret should be defined in environment variables securely
const secret = process.env.KIWIFY_WEBHOOK_TOKEN as string;

if (!secret) {
  throw new Error('KIWIFY_WEBHOOK_TOKEN is not defined');
}

// Implementing rate limiting
const rateLimiter = new RateLimiterMemory({
  points: 10, // 10 requests
  duration: 1, // per 1 second by IP
});

export async function POST(req: NextRequest) {
  try {
    await rateLimiter.consume(req.ip ?? ''); // Consume 1 point per request

    const body = await req.text();

    // Receive order's data
    let order: Record<string, any> = {};
    try {
      order = JSON.parse(body);
    } catch (error) {
      return NextResponse.json({ error: (error as Error).message }, { status: 400 });
    }

    // Verify signature
    const { searchParams } = new URL(req.url);
    const signature = searchParams.get('signature');
    const calculatedSignature = crypto.createHmac('sha1', secret)
      .update(JSON.stringify(order)).digest('hex');
    
    // Constant-time comparison to prevent timing attacks
    if (!crypto.timingSafeEqual(Buffer.from(signature || ''), Buffer.from(calculatedSignature))) {
      return NextResponse.json({ error: 'Incorrect signature' }, { status: 400 });
    }

    // Check if the order status is "paid"
    if (order.order_status === 'paid') {
      console.log('Payment received for order:', order.order_id);
      return NextResponse.json({ status: 'ok' }, { status: 200 });
    }

    // If not paid, just return a 200 status
    // return NextResponse.json({ status: 'ok' }, { status: 200 });

  } catch (rateLimiterRes) {
    return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok' }, { status: 200 });
}

export async function HEAD() {
  return new Response(null, { status: 200 });
}
