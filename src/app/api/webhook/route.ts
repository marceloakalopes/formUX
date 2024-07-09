import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const secret = process.env.KIWIFY_WEBHOOK_TOKEN as string;

export async function POST(req: NextRequest) {
  const body = await req.text();

  // receive order's data
  let order: Record<string, any> = {};
  try {
    order = JSON.parse(body);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }

  // verify signature
  const { searchParams } = new URL(req.url);
  const signature = searchParams.get('signature');
  const calculatedSignature = crypto.createHmac('sha1', secret)
    .update(JSON.stringify(order)).digest('hex');
  if (signature !== calculatedSignature) {
    return NextResponse.json({ error: 'Incorrect signature' }, { status: 400 });
  }

  // do any job with received order's data
  console.log('Received order:', order);

  // return success response
  return NextResponse.json({ status: 'ok' }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ status: 'ok' }, { status: 200 });
}

export async function HEAD() {
  return new Response(null, { status: 200 });
}
