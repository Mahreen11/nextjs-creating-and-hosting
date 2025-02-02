export async function GET() {

        console.log("MongoDB User:", process.env.MONGODB_USER);
        console.log("MongoDB Password:", process.env.MONGODB_PASSWORD);
    
    return new Response(JSON.stringify({user: process.env.MONGODB_USER}),{
        status: 200,
    });

}
//client asks and GET returns data unlike pages which returns rendered react components
export async function POST(){
    return new Response('Thank you for posting to this route handler',{
        status:200,
    })
}

