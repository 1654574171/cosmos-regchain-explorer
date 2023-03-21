<template>
  <div>
    <b-card
      no-body
      class="text-truncate"
    >
      <b-table
        :items="rules"
        :fields="list_fields"
        :sort-desc="true"
        sort-by="tokens"
        striped
        hover
        stacked="sm"
      >
        <template #cell(ruleName)="data">
<!--          <router-link :to="`./rules/${data.item.ruleName}`">-->
            <small>{{ data.item.ruleName }}</small>
<!--          </router-link>-->
        </template>
        <template #cell(hash)="data">
          <small>{{ data.item.hash }}</small>
        </template>
        <template #cell(content)="data">
          <small>{{ data.item.content }}</small>
        </template>

      </b-table>
    </b-card>
  </div>
</template>

<script>
import {
  BTable, BCard, BCardHeader, BCardTitle, VBTooltip,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BTable,
    BCardHeader,
    BCardTitle,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      rules: [],
      list_fields: [
        {
          key: 'ruleName',
        },
        {
          key: 'hash',
          tdClass: 'text-truncate',
        },
        {
          key: 'content',
        },
      ],
    }
  },
  created() {
    this.$http.getRuleList().then(res => {
      this.rules = res
    })
  },
  methods: {
    length: v => (Array.isArray(v) ? v.length : 0),
  },
}
</script>
