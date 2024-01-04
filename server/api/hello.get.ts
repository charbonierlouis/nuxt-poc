export default defineEventHandler((event) => {
    const data = {
        hello: 'world',
    }
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'cache-control': 'max-age=60, s-maxage=60 stale-while-revalidate',
            'content-type': 'application/json',
        }
    })
})
