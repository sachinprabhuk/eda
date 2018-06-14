const admin_home = require('./others/admin_home'),
      set_designation = require('./others/set_designation'),
      add_faculty = require('./faculty_db_ops/add_faculty'),
      get_all_faculties = require('./faculty_db_ops/get_all_faculties'),
      delete_faculties = require('./faculty_db_ops/delete_faculties'),
      slot_creation = require('./slot_db_ops/slot_creation'),
      delete_slots = require('./slot_db_ops/delete_slots'),
      add_slots = require('./slot_db_ops/add_slots'),
      change_timings = require('./date_and_time_ops/change_timings'),
      get_exam_timings = require('./date_and_time_ops/get_exam_timings'),
      get_exam_dates = require('./date_and_time_ops/get_exam_dates'),
      pending_faculties = require('./faculty_db_ops/pending_faculty'),
      slot_info = require('./slot_db_ops/slot_info');

module.exports = {
  admin_home,
  set_designation,
  add_faculty,
  get_all_faculties,
  delete_faculties,
  slot_creation,
  delete_slots,
  change_timings,
  add_slots,
  get_exam_timings,
  get_exam_dates,
  pending_faculties,
  slot_info
}