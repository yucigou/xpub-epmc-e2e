import { Selector } from 'testcafe'

const create = {
  input: Selector('form input[name="Search"]'),
  search: Selector('form button'),
  form: Selector('form'),
  list: Selector(() => document.querySelector('form').nextSibling.nextSibling),
}

export default create
