<style lang="scss" src="./calendar.component.scss" module/>

<template>
  <div :class="$style['calendar-container']">
    <div :class="$style['header-container']">
      {{ mountName }}
    </div>
    <div :class="$style['body-container']">
            <Day v-for="day in days"
                 :key="day"
                 :class="$style['day']"
                 :day="day"/>
    </div>
  </div>
</template>

<script lang="ts" src="./calendar.component.ts"/>
