import { combineReducers } from 'redux'
import pages from './pages'

// ใช้ combineReducers เพื่อรวม reducer แต่ละตัวเข้าเป็นหนึ่ง
export default combineReducers({
  // ES2015 มีค่าเท่ากับ pages: pages
  // pages ตัวแรกที่เป็น key ของอ็อบเจ็กต์บอกว่า
  // เราจะใช้คำว่า pages เป็นคำในการเข้าถึง
  pages
})