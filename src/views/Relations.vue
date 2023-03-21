<template>
  <div>
    <b-card
      no-body
      class="text-truncate"
    >
      <b-table
        :items="relations"
        :fields="list_fields"
        :sort-desc="true"
        sort-by="tokens"
        striped
        hover
        stacked="sm"
      >
        <template #cell(contractAddress)="data">
<!--          <router-link :to="`./relations/${data.item.relationName}`">-->
            <small>{{ data.item.contractAddress }}</small>
          <!--          </router-link>-->
        </template>
        <template #cell(bindingName)="data">
          <small>{{ data.item.bindingName }}</small>
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
      relations: [],
      list_fields: [
        {
          key: 'contractAddress',
          tdClass: 'text-truncate',
        },
        {
          key: 'bindingName',
        },
      ],
    }
  },
  created() {
    this.$http.getRelationList().then(res => {
      this.relations = res
    })
  },
  methods: {
    length: v => (Array.isArray(v) ? v.length : 0),
  },
}
</script>
