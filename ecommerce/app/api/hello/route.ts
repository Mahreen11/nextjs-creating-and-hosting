export async function GET() {

    return new Response(JSON.stringify({message:'Hello'}),{
        status: 200,
    });

}
//client asks and GET returns data unlike pages which returns rendered react components
export async function POST(){
    return new Response('Thank you for posting to this route handler',{
        status:200,
    })
}

