import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

interface QuestionType {
  id: string
  quest: string
  trueA: string
  ifTrue: number
  answers: {
    id: string
    text: string
  }[]
}

export interface TaskListType {
  id: string
  description: string
  imgUrl: string
  tags: {
    color: string
    text: string
  }[]
  currentStatus: 'new' | 'complete' | 'skipped'
  result: number
  testDescription: string
  questions: QuestionType[]
}

interface InitialType {
  list: TaskListType[]
}

const initialState: InitialType = {
  list: [
    {
      id: uuidv4(),
      result: 80,
      currentStatus: 'complete',
      description: 'Основы электротехники',
      testDescription:
        'Ответьте на вопросы теста. Каждый вопрос содержит один правильный ответ.',
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      tags: [
        {
          color: '#52C41A',
          text: 'Выполнено',
        },
        {
          color: '#FFA940',
          text: '80',
        },
      ],
      questions: [],
    },
    {
      id: uuidv4(),
      result: 0,
      currentStatus: 'new',
      description: 'Основы управления летательными аппаратами',
      testDescription:
        'Ответьте на вопросы теста. Каждый вопрос содержит один правильный ответ. Внимание! Время на тестирование ограничено.',
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      tags: [
        {
          color: '#FF7875',
          text: 'Назначено 23:29:29',
        },
      ],
      questions: [
        {
          quest:
            'Основная составляющая квадрокоптера, имеющая множество входов и выходов для получения, обработки и передачи информации это:',
          trueA: '1872491241042',
          ifTrue: 50,
          id: uuidv4(),
          answers: [
            {
              id: '1872491241042',
              text: 'полётный контроллер',
            },
            {
              id: uuidv4(),
              text: 'система радиоприёма и передачи',
            },
            {
              id: uuidv4(),
              text: 'рама квадрокоптера',
            },
            {
              id: uuidv4(),
              text: 'система передачи видео (FPV)',
            },
          ],
        },
        {
          quest:
            'Линейный и угловой манёвры БМС относительно оси Z называются:',
          trueA: '892397582198456234',
          ifTrue: 50,
          id: uuidv4(),
          answers: [
            {
              id: '892397582198456234',
              text: 'тангаж, поперечное скольжение',
            },
            {
              id: uuidv4(),
              text: 'крен, продольное скольжение',
            },
            {
              id: uuidv4(),
              text: 'рысканье, изменение высоты',
            },
            {
              id: uuidv4(),
              text: 'изменение высоты, движение вперед-назад',
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      result: 0,
      currentStatus: 'new',
      description: 'Основы сборки летательных аппаратов',
      testDescription:
        'Ответьте на вопросы теста. Каждый вопрос содержит один правильный ответ.',
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      tags: [
        {
          color: 'blue',
          text: 'Назначено',
        },
      ],
      questions: [],
    },
    {
      id: uuidv4(),
      result: 0,
      currentStatus: 'new',
      description: 'Монтаж и сборка FPV',
      testDescription:
        'Ответьте на вопросы теста. Каждый вопрос содержит один правильный ответ.',
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      tags: [
        {
          color: 'gray',
          text: 'Выполнить до 29.12.2021',
        },
      ],
      questions: [],
    },
    {
      id: uuidv4(),
      result: 0,
      currentStatus: 'skipped',
      description: 'Основы навигации и пилотирования',
      testDescription:
        'Ответьте на вопросы теста. Каждый вопрос содержит один правильный ответ.',
      imgUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      tags: [
        {
          color: '#FF4D4F',
          text: 'Просрочено',
        },
      ],
      questions: [],
    },
  ],
}

const theoryTestsSLice = createSlice({
  name: 'tests/theory',
  initialState: initialState as InitialType,
  reducers: {
    addTests: (state, { payload }) => {
      state.list = payload
    },
    completeTest: (
      state,
      {
        payload,
      }: {
        payload: {
          testId: string
          result: number
        }
      }
    ) => {
      state.list = state.list.map((test) => {
        if (test.id === payload.testId) {
          return {
            ...test,
            currentStatus: 'complete',
            result: payload.result,
            tags: [
              {
                color: payload.result >= 70 ? '#52C41A' : '#FF4D4F',
                text: 'Выполнено',
              },
              {
                color: payload.result >= 70 ? '#52C41A' : '#FFA940',
                text: payload.result.toString(),
              },
            ],
          }
        } else return test
      })
    },
  },
})

export const theoryTestsActions = theoryTestsSLice.actions
export default theoryTestsSLice.reducer
