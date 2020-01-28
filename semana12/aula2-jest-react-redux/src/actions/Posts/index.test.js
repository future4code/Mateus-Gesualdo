import React from 'react'
import {setPosts, setDetailsPageContent} from './index'

describe("Testa actions e action creators de posts", () => {

    test('Testa a action creator SET POSTS', () => {

        const postList = [1,2,3,4,5]
        const action = setPosts(postList)

        expect(action.type).toEqual("SET_POSTS")
        expect(action.payload).toEqual({'posts': postList})
    })

    test('Testa a action creator SET DETAILS', () => {

        const comments = [1,2,3,4,5]
        const action = setDetailsPageContent(comments, 'post')

        expect(action.type).toEqual("SET_DETAILS")
        expect(action.payload.comments).toEqual(comments)
        expect(action.payload.post).toEqual('post')
    })
})