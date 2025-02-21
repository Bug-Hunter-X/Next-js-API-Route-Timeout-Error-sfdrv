```javascript
// pages/api/dataSolution.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Simulate a long-running operation.  In production, move this to a background worker
    await new Promise(resolve => setTimeout(resolve, 5000));
    return NextResponse.json({ data: 'some data' });
  } catch (error) {
    // Handle potential errors and return an appropriate response.
    return new NextResponse('Error', { status: 500 });
  }
}
```