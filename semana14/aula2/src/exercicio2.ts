type post = {
    author: string,
    text: string
}

let postList: post[] = [
    {
        author: 'First author',
        text: 'First text'
    },
    {
        author: 'Second author',
        text: 'Second text'
    },
    {
        author: 'Third author',
        text: 'Third text'
    },
    {
        author: 'First author',
        text: 'Fourth text'
    },
    {
        author: 'Fifth author',
        text: 'Fifth text'
    },
]

function filterPosts(posts: post[], author: string): post[] {
    return posts.filter(
        post => post.author === author
    )
}

// *** TESTE *** //

console.log( filterPosts( postList, 'First author' ) )