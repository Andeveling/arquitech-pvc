import { createSlice } from '@reduxjs/toolkit'
import { ProjectI } from '@/models/Project.model'

//  id: string | number
//  title: string
//  address: string
//  client: string
//  windows: []

type InitialState = {
  projects: ProjectI[]
}
const initialState: InitialState = {
  projects: [],
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload)
    },
    addWindow: (state, action) => {
      const { id, ...res } = action.payload
      const project = state.projects[0]
      if (project) project.windows.push(res as never)
      let total = 0
      for (const win of project.windows) {
        total += win.price
      }
      console.log(total)
    },
  },
})

export const { addProject, addWindow } = projectSlice.actions
