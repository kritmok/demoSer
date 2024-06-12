export function GET () {
    let data = {
        title: "Hello, World!",
        content: "Yoyoyoyo"
    }

    return new Response(JSON.stringify(data), {status: 200});
}