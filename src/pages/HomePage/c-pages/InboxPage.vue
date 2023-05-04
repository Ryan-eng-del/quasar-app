<template>
  <q-page padding>
    <q-btn
      round
      color="primary"
      icon="add"
      @click="persistent = true"
    ></q-btn>

    <div class="q-mt-lg">
      <CourseCard @edit-course="prepareEdit" course-id="***" />
    </div>

    <!-- add classes dialog -->
    <q-dialog
      v-model="persistent"
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 500px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">添加课程</div>
        </q-card-section>

        <q-card-section class="q-pt-none bg-primary text-white">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="course"
            label="课程名称"
            class="q-pb-lg"
          />
          <q-input v-model="desc" label="课程描述" class="q-pb-lg" />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-primary">
          <q-btn
            flat
            label="删除课程"
            @click="deleteCourse"
            class="text-red-5"
          />
          <q-btn
            flat
            label="OK"
            @click="isEdit ? editCourse : createClass"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import CourseCard from '../../../components/CourseCpn.vue';
import { useCourse } from '../../../hook/HomePage/useCourse';

// 课程 CRUD
const {
  createClass,
  editCourse,
  deleteCourse,
  prepareEdit,
  persistent,
  isEdit,
  course,
  desc,
} = useCourse();
</script>
