import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

interface WebhookEvent {
  order_id: string;
  order_status: string;
  payment_method: string;
  store_id: string;
  webhook_event_type: string;
  Product: {
    product_id: string;
    product_name: string;
  };
  Customer: {
    full_name: string;
    first_name: string;
    email: string;
    mobile: string | null;
  };
  // Add other fields as necessary
}

const SECRET_KEY = process.env.KIWIFY_WEBHOOK_TOKEN || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.nextUrl.searchParams.get('signature');
    
    if (!validateSignature(body, signature, SECRET_KEY)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event: WebhookEvent = JSON.parse(body);

    if (event.webhook_event_type === 'order_approved' && event.order_status === 'paid') {
      console.log('Received a valid order approved event:', event);

      // Here, you can log the event or perform other operations as needed

      return NextResponse.json({ message: 'Webhook processed successfully' });
    } else {
      return NextResponse.json({ message: 'Unhandled event' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

function validateSignature(payload: string, signature: string | null, secret: string): boolean {
  if (!signature) return false;

  const calculatedSignature = crypto
    .createHmac('sha1', secret)
    .update(payload)
    .digest('hex');

  return signature === calculatedSignature;
}
