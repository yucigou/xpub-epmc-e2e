require('dotenv').config()
import { login, entry, create } from './pageObjects'

fixture('Valid user')

test('Signup journey', async t => {

  // log in and start to submit a new manuscript
  await login.doLogin(process.env.PLUS_USERNAME, process.env.PLUS_PASSWORD).click(entry.submit)

  const ops = []
  for (let i = 0; i < 2; i += 1) {
    ops.push(
      t
        .selectText(create.input)
        .pressKey('delete')
        .typeText(create.input, 'blood')
        .click(create.search)
        .expect(create.list.childElementCount)
        .gt(1),
    )
  }
  await Promise.all(ops)
})
