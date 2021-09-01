<style lang="scss" src="./day.component.scss" module/>

<template>
  <div :class="dayContainerClasses">
    <div :class="$style['header']">
      <span :class="$style['day-number']">
              {{ day }}
      </span>
      <div :class="$style['add-button']">
        +
      </div>
    </div>
    <div :class="$style['body']">
      <span v-if="!events.length"
            :class="$style['no-events-text']">
        {{ 'no events' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./day.component.ts"/>
