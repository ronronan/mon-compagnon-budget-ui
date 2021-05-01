<template>
  <b-sidebar
    position="static"
    mobile="hide"
    :expand-on-hover="false"
    :reduce="false"
    type="is-white"
    :fullheight="true"
    open>
      <div class="p-1">
        <div class="media-content">
          <p class="title is-4">{{ firstName }} <strong>{{ lastName }}</strong></p>
          <p class="subtitle is-6 tag">{{ email }}</p>
          <p v-if="role === 'ADMIN'" class="tag is-danger">{{ role }}</p>
          <p v-else class="tag is-info">{{ role }}</p>
        </div>
        <b-menu>
          <b-menu-list>
            <b-menu-item label="Home" icon="link" tag="router-link" to="/"></b-menu-item>
          </b-menu-list>
          <b-menu-list>
            <b-menu-item label="About" icon="link" tag="router-link" to="/about"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false,
      expandOnHover: false,
      mobile: "reduce",
      reduce: false
    };
  },
  props: {
    firstName: {
      type: String,
      default: "Unknow"
    },
    lastName: {
      type: String,
      default: "Unknow"
    },
    email: {
      type: String,
      default: "Unknow"
    },
    role: {
      type: String,
      default: "Unknow"
    }
  }
}
</script>

<style lang="scss" scoped>
.p-1 {
  padding: 1em;
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
.is-mini-expand {
    .menu-list a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>