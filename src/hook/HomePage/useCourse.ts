import { reactive, ref } from 'vue';

export function useCourse() {
  // reactive
  const { course, desc } = reactive({
    course: ref(''),
    desc: ref(''),
  });

  const persistent = ref(false);
  const isEdit = ref(false);

  // event handle
  // 创建课程
  const createClass = async () => {
    console.log('createClass');
  };

  const prepareEdit = () => {
    persistent.value = true;
    isEdit.value = true;
    console.log('editCourse');
  };

  // 编辑课程
  const editCourse = () => {
    console.log('createClass');
  };

  // 删除课程
  const deleteCourse = () => {
    console.log('createClass');
  };

  return {
    createClass,
    editCourse,
    deleteCourse,
    prepareEdit,
    persistent,
    isEdit,
    course,
    desc,
  };
}
