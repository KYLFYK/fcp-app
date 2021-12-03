import { Button, Form, Radio, Space } from 'antd'
import { FC } from 'react'
import {
  TaskListType,
  theoryTestsActions,
} from '../../store/tests/reducers/theoryTestsSlice'
import { useAppDispatch } from '../../store/store'
import { TaskStatusType } from './TestPage'

import styles from './Tests.module.scss'

interface Props {
  task: TaskListType
  setStatus: (nesStatus: TaskStatusType) => void
}

export const Questions: FC<Props> = ({ task, setStatus }) => {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    let result = 0

    task.questions.forEach((quest) => {
      if (values[quest.id] === quest.trueA) {
        result += quest.ifTrue
      }
    })

    dispatch(
      theoryTestsActions.completeTest({
        testId: task.id,
        result: result,
      })
    )

    setStatus({
      completed: true,
      result: result,
      success: result >= 70,
    })
  }

  return (
    <div className={styles.questions}>
      <Form form={form} onFinish={onFinish}>
        {task.questions.map((taskQuest, index) => (
          <div className={styles.task} key={index}>
            <div className={styles.taskHead}>
              <span className={styles.taskNum}>{index + 1}.</span>
              <span className={styles.questTitle}>{taskQuest.quest}</span>
            </div>
            <div className={styles.answers}>
              <Form.Item name={taskQuest.id}>
                <Radio.Group>
                  <Space direction="vertical">
                    {taskQuest.answers.map((answer, index) => (
                      <Radio key={index} value={answer.id}>
                        {answer.text}
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
        ))}
        <Button
          type={'primary'}
          size={'large'}
          onClick={form.submit}
          style={{
            marginTop: 58,
          }}
        >
          Отправить ответы
        </Button>
      </Form>
    </div>
  )
}
