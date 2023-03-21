<template>
  <div>
    <b-card
      no-body
      class="text-truncate"
    >
      <b-table
        :items="bindings"
        :fields="list_fields"
        :sort-desc="true"
        sort-by="tokens"
        striped
        hover
        stacked="sm"
      >
        <template #cell(bindingName)="data">
<!--          <router-link :to="`./bindings/${data.item.bindingName}`">-->
            <small>{{ data.item.bindingName }}</small>
<!--          </router-link>-->
        </template>
        <template #cell(hash)="data">
          <small>{{ data.item.hash }}</small>
        </template>
        <template #cell(content)="data">
          <small>{{ data.item.content }}</small>
        </template>
        <template #cell(ruleFilesNames)="data">
          <small>{{ data.item.ruleFilesNames }}</small>
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
      bindings: [],
      list_fields: [
        {
          key: 'bindingName',
        },
        {
          key: 'hash',
          tdClass: 'text-truncate',
        },
        {
          key: 'content',
        },
        {
          key: 'ruleFilesNames',
        },
      ],
    }
  },
  created() {
    this.$http.getBindingList().then(res => {
      this.bindings = res
    })
  },
  methods: {
    length: v => (Array.isArray(v) ? v.length : 0),
  },
}
</script>
