
import {  RESENDER_API } from '@/lib/constant';
import { Resend } from 'resend';

const resend = new Resend(RESENDER_API);

export async function POST(req: Request) {
    const data = await req.json();
    const {from_name,from_email,message,phone_number,}=data
  try {


   

    const { data, error } = await resend.emails.send({
      from: `Cognix Education <delivered@resend.dev>`,
      to: ['congnixeducation@gmail.com'],
      subject: `You have new Notification from ${from_name} from Cognix Education `,
      html:`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <h2> Name: <label>${from_name}</label></h2>
          <h2> Email: <label><a style="color: blue;" href="mailto:${from_name} <${from_email}>">${from_email}</a></label> </h2>
         
          <h2> Phone Number: <label><a style="color: blue;" href="tel:${phone_number}">${phone_number}</a></label></h2>
          
          <p style="padding: 2rem; width: 80%; border: 1px solid grey;">${message}</p>
        </body>
      </html> 
    `,
    
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
