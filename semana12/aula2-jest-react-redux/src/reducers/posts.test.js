import {postReducer} from './posts'
import {setPosts} from '../actions/Posts'

describe("Teste dos post reducers", ( ) => {

    test("Testa o reducer do case SET POSTS", () => {

        const initalState = ({
            posts : [],
            currentPostComments: [],
            currentPost: "",
        })
        const action = setPosts([1,2,3])
        const newState = postReducer(initalState, action)

        expect(newState.posts).toEqual([1,2,3])

    })
})