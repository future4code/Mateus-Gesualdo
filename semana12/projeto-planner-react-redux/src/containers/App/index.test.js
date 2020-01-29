import React from 'react'
import renderer from 'react-test-renderer'
import { Planner } from './index'

test("Planner Snapshot", () => {

    const tree = renderer.create(<Planner />).toJSON()

    expect(tree).toMatchSnapshot()

})

