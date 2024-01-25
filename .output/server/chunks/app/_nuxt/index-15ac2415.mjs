import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { toRef, createVNode, mergeProps, ref, computed, watchEffect, Transition, withDirectives, resolveDirective, vShow, watch, Fragment, cloneVNode, useSSRContext, provide, inject, reactive, shallowRef, nextTick, unref, withCtx, openBlock, createBlock, createTextVNode, createCommentVNode, toDisplayString, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { m as makeBorderProps, a as makeComponentProps, b as makeDensityProps, c as makeElevationProps, d as makeRoundedProps, e as makeTagProps, f as makeVariantProps, u as useDensity, g as useBorder, h as useElevation, i as useRounded, j as useRender, k as makeSizeProps, l as useSize, n as useTextColor, o as useResizeObserver, p as makeLocationProps, q as useLocation, r as useBackgroundColor, s as makeDimensionProps, t as makePositionProps, v as makeRouterProps, R as Ripple, w as useVariant, x as useDimension, y as usePosition, z as useLink, A as genOverlays, V as VIcon, B as VDefaultsProvider, C as makeTransitionProps$1, D as VSlideYTransition, M as MaybeTransition, E as nullifyTransforms, F as animate, G as standardEasing, H as VExpandXTransition, I as Intersect$1, J as forwardRefs, K as VContainer, L as VRow, N as VCol, O as VImg } from './forwardRefs-f1f87cff.mjs';
import { p as propsFactory, m as makeThemeProps, g as genericComponent, d as provideTheme, e as provideDefaults, q as convertToUnit, j as useProxiedModel, s as useRtl, I as IconValue, E as EventProp, h as getUid, w as wrapInArray, A as filterInputAttrs, _ as _export_sfc, f as getCurrentInstance, k as deepEqual, S as SUPPORTS_INTERSECTION, t as getCurrentInstanceName, v as useLocale, x as isOn, y as pick, z as useToggleScope, B as callEvent, l as findChildrenWithProvide, o as consoleWarn } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'animejs';

const _imports_0$5 = "" + publicAssetsURL("images/banner.jpg");
const _imports_1$3 = "" + publicAssetsURL("images/banner-small.png");
const _sfc_main$8 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0 d-none d-md-block",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, { src: _imports_0$5 }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, { src: _imports_0$5 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VImg, { src: _imports_0$5 })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VImg, { src: _imports_0$5 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0 d-block d-md-none",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, { src: _imports_1$3 }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, { src: _imports_1$3 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VImg, { src: _imports_1$3 })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VImg, { src: _imports_1$3 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$8;
const _imports_0$4 = "" + publicAssetsURL("images/scrolllogo.png");
const _imports_1$2 = "" + publicAssetsURL("images/scrolllogo2.png");
const _imports_2$3 = "" + publicAssetsURL("images/astrau.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f7e40b4b>`);
  _push(ssrRenderComponent(VContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="scrolling-container" data-v-f7e40b4b${_scopeId3}><div class="scrolling-images" data-v-f7e40b4b${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, { src: _imports_0$4 }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VImg, { src: _imports_1$2 }, null, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "scrolling-container" }, [
                        createVNode("div", { class: "scrolling-images" }, [
                          createVNode(VImg, { src: _imports_0$4 }),
                          createVNode(VImg, { src: _imports_1$2 })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "scrolling-container" }, [
                      createVNode("div", { class: "scrolling-images" }, [
                        createVNode(VImg, { src: _imports_0$4 }),
                        createVNode(VImg, { src: _imports_1$2 })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "scrolling-container" }, [
                    createVNode("div", { class: "scrolling-images" }, [
                      createVNode(VImg, { src: _imports_0$4 }),
                      createVNode(VImg, { src: _imports_1$2 })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "my-auto",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p class="dinlight-h1" data-v-f7e40b4b${_scopeId3}><span data-v-f7e40b4b${_scopeId3}> In the rapid currents of today\u2019s digital landscape, White Water Media is your steadfast navigator,channeling the magic of marketing to fuel your brand&#39;s seamless and robust growth. </span></p>`);
                  } else {
                    return [
                      createVNode("p", { class: "dinlight-h1" }, [
                        createVNode("span", null, " In the rapid currents of today\u2019s digital landscape, White Water Media is your steadfast navigator,channeling the magic of marketing to fuel your brand's seamless and robust growth. ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      ref: "animatedImage",
                      class: "mx-auto",
                      src: _imports_2$3,
                      width: "400"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        ref: "animatedImage",
                        class: "mx-auto",
                        src: _imports_2$3,
                        width: "400"
                      }, null, 512)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "my-auto",
                  cols: "12",
                  xxl: "6",
                  xl: "6",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "dinlight-h1" }, [
                      createVNode("span", null, " In the rapid currents of today\u2019s digital landscape, White Water Media is your steadfast navigator,channeling the magic of marketing to fuel your brand's seamless and robust growth. ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  xxl: "6",
                  xl: "6",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      ref: "animatedImage",
                      class: "mx-auto",
                      src: _imports_2$3,
                      width: "400"
                    }, null, 512)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "my-auto",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "dinlight-h1" }, [
                    createVNode("span", null, " In the rapid currents of today\u2019s digital landscape, White Water Media is your steadfast navigator,channeling the magic of marketing to fuel your brand's seamless and robust growth. ")
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    ref: "animatedImage",
                    class: "mx-auto",
                    src: _imports_2$3,
                    width: "400"
                  }, null, 512)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollAnime.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-f7e40b4b"]]);
const _imports_0$3 = "" + publicAssetsURL("images/craftingimpact.png");
const _sfc_main$6 = {
  __name: "Aboutus",
  __ssrInlineRender: true,
  setup(__props) {
    const data = reactive({
      showVisionContent: false
    });
    const toggleContent = (section) => {
      console.log("Clicked");
      if (section === "vision") {
        console.log("Inside vision");
        data.showVisionContent = true;
        console.log(data.showVisionContent);
      } else {
        data.showVisionContent = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-8ed5eb06><div class="d-none d-md-block align-center justify-center" data-v-8ed5eb06>`);
      _push(ssrRenderComponent(VContainer, { class: "pt-lg-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<br data-v-8ed5eb06${_scopeId}>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "4",
                    class: "mt-5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mainblock" data-v-8ed5eb06${_scopeId3}><div class="thinLine" data-v-8ed5eb06${_scopeId3}></div><div class="${ssrRenderClass({
                          block: !unref(data).showVisionContent,
                          "block-with-margin": unref(data).showVisionContent
                        })}" data-v-8ed5eb06${_scopeId3}></div><div class="" data-v-8ed5eb06${_scopeId3}><h2 class="sideHead" data-v-8ed5eb06${_scopeId3}> ABOUT US </h2><h2 class="sideHead mt-8" data-v-8ed5eb06${_scopeId3}> VISION </h2></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mainblock" }, [
                            createVNode("div", { class: "thinLine" }),
                            createVNode("div", {
                              class: {
                                block: !unref(data).showVisionContent,
                                "block-with-margin": unref(data).showVisionContent
                              }
                            }, null, 2),
                            createVNode("div", { class: "" }, [
                              createVNode("h2", {
                                class: "sideHead",
                                onClick: ($event) => toggleContent("about")
                              }, " ABOUT US ", 8, ["onClick"]),
                              createVNode("h2", {
                                class: "sideHead mt-8",
                                onClick: ($event) => toggleContent("vision")
                              }, " VISION ", 8, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "8",
                    class: "mt-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!unref(data).showVisionContent) {
                          _push4(`<p style="${ssrRenderStyle({ "line-height": "50px" })}" class="sharpsans-h1" data-v-8ed5eb06${_scopeId3}> At <span style="${ssrRenderStyle({ "color": "#138064", "font-weight": "600" })}" data-v-8ed5eb06${_scopeId3}>White Water Media</span>, marketing magic and business growth flow together like a harmonious river. With a unique blend of marketing insight and creative flair, we&#39;re here to turn the tides in your favor, making your brand&#39;s presence felt strongly and sustainably in the marketplace. </p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(data).showVisionContent) {
                          _push4(`<p class="sharpsans-h1" data-v-8ed5eb06${_scopeId3}> Visualize a dynamic confluence where marketing innovation meets compelling brand stories, creating a powerful current that leads and transforms, making waves in the market. </p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          !unref(data).showVisionContent ? (openBlock(), createBlock("p", {
                            key: 0,
                            style: { "line-height": "50px" },
                            class: "sharpsans-h1"
                          }, [
                            createTextVNode(" At "),
                            createVNode("span", { style: { "color": "#138064", "font-weight": "600" } }, "White Water Media"),
                            createTextVNode(", marketing magic and business growth flow together like a harmonious river. With a unique blend of marketing insight and creative flair, we're here to turn the tides in your favor, making your brand's presence felt strongly and sustainably in the marketplace. ")
                          ])) : createCommentVNode("", true),
                          unref(data).showVisionContent ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "sharpsans-h1"
                          }, " Visualize a dynamic confluence where marketing innovation meets compelling brand stories, creating a powerful current that leads and transforms, making waves in the market. ")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "4",
                      class: "mt-5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mainblock" }, [
                          createVNode("div", { class: "thinLine" }),
                          createVNode("div", {
                            class: {
                              block: !unref(data).showVisionContent,
                              "block-with-margin": unref(data).showVisionContent
                            }
                          }, null, 2),
                          createVNode("div", { class: "" }, [
                            createVNode("h2", {
                              class: "sideHead",
                              onClick: ($event) => toggleContent("about")
                            }, " ABOUT US ", 8, ["onClick"]),
                            createVNode("h2", {
                              class: "sideHead mt-8",
                              onClick: ($event) => toggleContent("vision")
                            }, " VISION ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "8",
                      class: "mt-3"
                    }, {
                      default: withCtx(() => [
                        !unref(data).showVisionContent ? (openBlock(), createBlock("p", {
                          key: 0,
                          style: { "line-height": "50px" },
                          class: "sharpsans-h1"
                        }, [
                          createTextVNode(" At "),
                          createVNode("span", { style: { "color": "#138064", "font-weight": "600" } }, "White Water Media"),
                          createTextVNode(", marketing magic and business growth flow together like a harmonious river. With a unique blend of marketing insight and creative flair, we're here to turn the tides in your favor, making your brand's presence felt strongly and sustainably in the marketplace. ")
                        ])) : createCommentVNode("", true),
                        unref(data).showVisionContent ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "sharpsans-h1"
                        }, " Visualize a dynamic confluence where marketing innovation meets compelling brand stories, creating a powerful current that leads and transforms, making waves in the market. ")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("br"),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "4",
                    class: "mt-5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mainblock" }, [
                        createVNode("div", { class: "thinLine" }),
                        createVNode("div", {
                          class: {
                            block: !unref(data).showVisionContent,
                            "block-with-margin": unref(data).showVisionContent
                          }
                        }, null, 2),
                        createVNode("div", { class: "" }, [
                          createVNode("h2", {
                            class: "sideHead",
                            onClick: ($event) => toggleContent("about")
                          }, " ABOUT US ", 8, ["onClick"]),
                          createVNode("h2", {
                            class: "sideHead mt-8",
                            onClick: ($event) => toggleContent("vision")
                          }, " VISION ", 8, ["onClick"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "8",
                    class: "mt-3"
                  }, {
                    default: withCtx(() => [
                      !unref(data).showVisionContent ? (openBlock(), createBlock("p", {
                        key: 0,
                        style: { "line-height": "50px" },
                        class: "sharpsans-h1"
                      }, [
                        createTextVNode(" At "),
                        createVNode("span", { style: { "color": "#138064", "font-weight": "600" } }, "White Water Media"),
                        createTextVNode(", marketing magic and business growth flow together like a harmonious river. With a unique blend of marketing insight and creative flair, we're here to turn the tides in your favor, making your brand's presence felt strongly and sustainably in the marketplace. ")
                      ])) : createCommentVNode("", true),
                      unref(data).showVisionContent ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "sharpsans-h1"
                      }, " Visualize a dynamic confluence where marketing innovation meets compelling brand stories, creating a powerful current that leads and transforms, making waves in the market. ")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-block d-md-none" data-v-8ed5eb06><h2 class="sideHead text-center pa-5" data-v-8ed5eb06>ABOUT US</h2><p class="sharpsans-h1 text-center mt-2 pa-2" data-v-8ed5eb06> At <span style="${ssrRenderStyle({ "color": "#138064", "font-weight": "600" })}" data-v-8ed5eb06>White Water Media</span>, marketing magic and business growth flow together like a harmonious river. With a unique blend of marketing insight and creative flair, we&#39;re here to turn the tides in your favor, making your brand&#39;s presence felt strongly and sustainably in the marketplace. </p><h2 class="sideHead text-center mt-8 mb-5" data-v-8ed5eb06>VISION</h2><p class="sharpsans-h1 mt-2 text-center pa-2" data-v-8ed5eb06> Visualize a dynamic confluence where marketing innovation meets compelling brand stories, creating a powerful current that leads and transforms, making waves in the market. </p></div><br data-v-8ed5eb06><br data-v-8ed5eb06><br data-v-8ed5eb06><br data-v-8ed5eb06><br data-v-8ed5eb06>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          class: "image-move",
                          src: _imports_0$3,
                          width: "900"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            class: "image-move",
                            src: _imports_0$3,
                            width: "900"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          class: "image-move",
                          src: _imports_0$3,
                          width: "900"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        class: "image-move",
                        src: _imports_0$3,
                        width: "900"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Aboutus.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8ed5eb06"]]);
const _imports_0$2 = "" + publicAssetsURL("images/forest.png");
const _imports_1$1 = "" + publicAssetsURL("images/arrow-left.png");
const _imports_2$2 = "" + publicAssetsURL("images/arrow.png");
const _sfc_main$5 = {
  __name: "ServicesMain",
  __ssrInlineRender: true,
  setup(__props) {
    const contents = [
      {
        title: "Social Media and Performance Marketing",
        description: "Each of our services, from crafting engaging social content to designing compelling digital ad campaigns, creates ripples of influence, impact and ROI."
      },
      {
        title: "Media Production and Graphic Design",
        description: "With a lens that captures and crafts, we merge the traditional with the digital, weaving visual tales that flow smoothly, speaking and resonating with your audience."
      },
      {
        title: "Digital Transformation",
        description: "Beyond mere websites, we craft portals of engaging digital experiences, where each interaction is a step deeper into the captivating waters of your brand."
      }
      // Add more content here
    ];
    let currentContentIndex = 0;
    const currentContent = ref(contents[currentContentIndex]);
    const nextContent = () => {
      if (currentContentIndex < contents.length - 1) {
        currentContentIndex++;
        currentContent.value = contents[currentContentIndex];
      }
    };
    const previousContent = () => {
      if (currentContentIndex > 0) {
        currentContentIndex--;
        currentContent.value = contents[currentContentIndex];
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "position": "relative" },
        class: "bg-white"
      }, _attrs))} data-v-0190ced0>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="image-container d-none d-md-block" style="${ssrRenderStyle({ "height": "100vh" })}" data-v-0190ced0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VImg, {
                          src: _imports_0$2,
                          cover: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="overlay" data-v-0190ced0${_scopeId3}></div><div class="text-container" data-v-0190ced0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="overlay-text sharpsans-h2 text-left" data-v-0190ced0${_scopeId6}> / Services </p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "2",
                                                  class: "pa-0"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        src: _imports_1$1,
                                                        style: { "cursor": "pointer" },
                                                        width: "50",
                                                        onClick: previousContent
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          src: _imports_1$1,
                                                          style: { "cursor": "pointer" },
                                                          width: "50",
                                                          onClick: previousContent
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "2",
                                                  class: "pa-0"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        src: _imports_2$2,
                                                        style: { "cursor": "pointer" },
                                                        width: "50",
                                                        onClick: nextContent
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          src: _imports_2$2,
                                                          style: { "cursor": "pointer" },
                                                          width: "50",
                                                          onClick: nextContent
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "2",
                                                    class: "pa-0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: _imports_1$1,
                                                        style: { "cursor": "pointer" },
                                                        width: "50",
                                                        onClick: previousContent
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "2",
                                                    class: "pa-0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: _imports_2$2,
                                                        style: { "cursor": "pointer" },
                                                        width: "50",
                                                        onClick: nextContent
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "2",
                                                  class: "pa-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: _imports_1$1,
                                                      style: { "cursor": "pointer" },
                                                      width: "50",
                                                      onClick: previousContent
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "2",
                                                  class: "pa-0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: _imports_2$2,
                                                      style: { "cursor": "pointer" },
                                                      width: "50",
                                                      onClick: nextContent
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_1$1,
                                                    style: { "cursor": "pointer" },
                                                    width: "50",
                                                    onClick: previousContent
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_2$2,
                                                    style: { "cursor": "pointer" },
                                                    width: "50",
                                                    onClick: nextContent
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, { class: "justify-end" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h1 class="text-left sharpsans-h2" data-v-0190ced0${_scopeId6}>${ssrInterpolate(unref(currentContent).title)}</h1>`);
                                        } else {
                                          return [
                                            createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h1 class="text-left sharpsans-h1" data-v-0190ced0${_scopeId8}>Unblocking</h1><h1 class="text-left sharpsans-h1" data-v-0190ced0${_scopeId8}> Your Brand&#39;s Potential </h1>`);
                                                    } else {
                                                      return [
                                                        createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                        createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    lg: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                      createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                    createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="text-left sharpsans-h3" data-v-0190ced0${_scopeId6}>${ssrInterpolate(unref(currentContent).description)}</p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_1$1,
                                                  style: { "cursor": "pointer" },
                                                  width: "50",
                                                  onClick: previousContent
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_2$2,
                                                  style: { "cursor": "pointer" },
                                                  width: "50",
                                                  onClick: nextContent
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, { class: "justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div><div class="image-container d-block d-md-none" data-v-0190ced0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VImg, {
                          src: _imports_0$2,
                          cover: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="overlay" data-v-0190ced0${_scopeId3}></div><div class="text-container" data-v-0190ced0${_scopeId3}>`);
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="overlay-text sharpsans-h2 text-left" data-v-0190ced0${_scopeId6}> / Services </p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "2",
                                                  class: "pa-0 ml-2"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        src: _imports_1$1,
                                                        width: "50",
                                                        onClick: previousContent
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          src: _imports_1$1,
                                                          width: "50",
                                                          onClick: previousContent
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "2",
                                                  class: "pa-0 ml-3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        src: _imports_2$2,
                                                        width: "50",
                                                        onClick: nextContent
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          src: _imports_2$2,
                                                          width: "50",
                                                          onClick: nextContent
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "2",
                                                    class: "pa-0 ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: _imports_1$1,
                                                        width: "50",
                                                        onClick: previousContent
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "2",
                                                    class: "pa-0 ml-3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: _imports_2$2,
                                                        width: "50",
                                                        onClick: nextContent
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "2",
                                                  class: "pa-0 ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: _imports_1$1,
                                                      width: "50",
                                                      onClick: previousContent
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "2",
                                                  class: "pa-0 ml-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: _imports_2$2,
                                                      width: "50",
                                                      onClick: nextContent
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0 ml-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_1$1,
                                                    width: "50",
                                                    onClick: previousContent
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0 ml-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_2$2,
                                                    width: "50",
                                                    onClick: nextContent
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, { class: "justify-end" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h1 class="text-left sharpsans-h2" data-v-0190ced0${_scopeId6}>${ssrInterpolate(unref(currentContent).title)}</h1>`);
                                        } else {
                                          return [
                                            createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h1 class="text-left sharpsans-h1" data-v-0190ced0${_scopeId8}>Unblocking</h1><h1 class="text-left sharpsans-h1" data-v-0190ced0${_scopeId8}> Your Brand&#39;s Potential </h1>`);
                                                    } else {
                                                      return [
                                                        createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                        createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    lg: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                      createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  lg: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                    createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="text-left sharpsans-h3" data-v-0190ced0${_scopeId6}>${ssrInterpolate(unref(currentContent).description)}</p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0 ml-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_1$1,
                                                  width: "50",
                                                  onClick: previousContent
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0 ml-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_2$2,
                                                  width: "50",
                                                  onClick: nextContent
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, { class: "justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "image-container d-none d-md-block",
                            style: { "height": "100vh" }
                          }, [
                            createVNode(VImg, {
                              src: _imports_0$2,
                              cover: ""
                            }),
                            createVNode("div", { class: "overlay" }),
                            createVNode("div", { class: "text-container" }, [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_1$1,
                                                    style: { "cursor": "pointer" },
                                                    width: "50",
                                                    onClick: previousContent
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_2$2,
                                                    style: { "cursor": "pointer" },
                                                    width: "50",
                                                    onClick: nextContent
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, { class: "justify-end" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "image-container d-block d-md-none" }, [
                            createVNode(VImg, {
                              src: _imports_0$2,
                              cover: ""
                            }),
                            createVNode("div", { class: "overlay" }),
                            createVNode("div", { class: "text-container" }, [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0 ml-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_1$1,
                                                    width: "50",
                                                    onClick: previousContent
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "2",
                                                class: "pa-0 ml-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: _imports_2$2,
                                                    width: "50",
                                                    onClick: nextContent
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, { class: "justify-end" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                lg: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                  createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, null, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "image-container d-none d-md-block",
                          style: { "height": "100vh" }
                        }, [
                          createVNode(VImg, {
                            src: _imports_0$2,
                            cover: ""
                          }),
                          createVNode("div", { class: "overlay" }),
                          createVNode("div", { class: "text-container" }, [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_1$1,
                                                  style: { "cursor": "pointer" },
                                                  width: "50",
                                                  onClick: previousContent
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_2$2,
                                                  style: { "cursor": "pointer" },
                                                  width: "50",
                                                  onClick: nextContent
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, { class: "justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "image-container d-block d-md-none" }, [
                          createVNode(VImg, {
                            src: _imports_0$2,
                            cover: ""
                          }),
                          createVNode("div", { class: "overlay" }),
                          createVNode("div", { class: "text-container" }, [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0 ml-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_1$1,
                                                  width: "50",
                                                  onClick: previousContent
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "2",
                                              class: "pa-0 ml-3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: _imports_2$2,
                                                  width: "50",
                                                  onClick: nextContent
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, { class: "justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              lg: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                                createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-0190ced0${_scopeId}>`);
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, null, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "image-container d-none d-md-block",
                        style: { "height": "100vh" }
                      }, [
                        createVNode(VImg, {
                          src: _imports_0$2,
                          cover: ""
                        }),
                        createVNode("div", { class: "overlay" }),
                        createVNode("div", { class: "text-container" }, [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "2",
                                            class: "pa-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: _imports_1$1,
                                                style: { "cursor": "pointer" },
                                                width: "50",
                                                onClick: previousContent
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "2",
                                            class: "pa-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: _imports_2$2,
                                                style: { "cursor": "pointer" },
                                                width: "50",
                                                onClick: nextContent
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, { class: "justify-end" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            lg: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                              createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "image-container d-block d-md-none" }, [
                        createVNode(VImg, {
                          src: _imports_0$2,
                          cover: ""
                        }),
                        createVNode("div", { class: "overlay" }),
                        createVNode("div", { class: "text-container" }, [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "overlay-text sharpsans-h2 text-left" }, " / Services ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "2",
                                            class: "pa-0 ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: _imports_1$1,
                                                width: "50",
                                                onClick: previousContent
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "2",
                                            class: "pa-0 ml-3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: _imports_2$2,
                                                width: "50",
                                                onClick: nextContent
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, { class: "justify-end" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h1", { class: "text-left sharpsans-h2" }, toDisplayString(unref(currentContent).title), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            lg: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h1", { class: "text-left sharpsans-h1" }, "Unblocking"),
                                              createVNode("h1", { class: "text-left sharpsans-h1" }, " Your Brand's Potential ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-left sharpsans-h3" }, toDisplayString(unref(currentContent).description), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("br")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServicesMain.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0190ced0"]]);
const _sfc_main$4 = {
  __name: "Maestros",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        text: "1",
        pos: -2,
        active: false,
        name: "Sapna Padmanabhan",
        description: "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you."
      },
      {
        text: "2",
        pos: -1,
        active: false,
        name: "Rony Joe",
        description: "The yogi with an obsession for business strategy. He approaches each brand with the same care he has for our finances. A salesman and smooth talker who tells the tale of each brand like it was a thing of legend. He\u2019ll be sending you an invoice for that."
      },
      {
        text: "3",
        pos: 0,
        active: true,
        name: "Sapna Padmanabhan",
        description: "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you."
      },
      {
        text: "4",
        pos: 1,
        active: false,
        name: "Sapna Padmanabhan",
        description: "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you."
      },
      {
        text: "5",
        pos: 2,
        active: false,
        name: "Sapna Padmanabhan",
        description: "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you."
      }
    ]);
    const update = (newActive) => {
      const newActivePos = newActive.pos;
      items.value.forEach((item) => {
        item.active = item.pos === newActivePos;
        item.pos = getPos(item.pos, newActivePos);
      });
    };
    const getPos = (current, active) => {
      const diff = current - active;
      if (Math.abs(current - active) > 2) {
        return -current;
      }
      return diff;
    };
    const getImageUrl = (index2) => {
      return `/images/carousel/${index2}.png`;
    };
    const getActiveItem = () => {
      return items.value.find((item) => item.active);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary ml-lg-3" }, _attrs))} data-v-345587e9>`);
      _push(ssrRenderComponent(VContainer, { class: "pa-0 ml-lg-16 d-none d-md-block" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "5",
                    class: "d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mainblock" data-v-345587e9${_scopeId3}><div class="block" data-v-345587e9${_scopeId3}></div><h1 class="text-left sharpsans-h2 head my-auto mb-10" data-v-345587e9${_scopeId3}> OUR MAESTROS </h1></div><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><h1 class="text-left sharpsans-h1 ml-lg-5 mb-10" data-v-345587e9${_scopeId3}>${ssrInterpolate(getActiveItem().name)} <p style="${ssrRenderStyle({ "font-size": "12px" })}" class="ml-1" data-v-345587e9${_scopeId3}>Partner</p></h1><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><p class="text-left ml-lg-5 sharpsans-h4" data-v-345587e9${_scopeId3}>${ssrInterpolate(getActiveItem().description)}</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "mainblock" }, [
                            createVNode("div", { class: "block" }),
                            createVNode("h1", { class: "text-left sharpsans-h2 head my-auto mb-10" }, " OUR MAESTROS ")
                          ]),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("h1", { class: "text-left sharpsans-h1 ml-lg-5 mb-10" }, [
                            createTextVNode(toDisplayString(getActiveItem().name) + " ", 1),
                            createVNode("p", {
                              style: { "font-size": "12px" },
                              class: "ml-1"
                            }, "Partner")
                          ]),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("p", { class: "text-left ml-lg-5 sharpsans-h4" }, toDisplayString(getActiveItem().description), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    class: "mx-auto",
                    cols: "12",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><div class="mt-14 mb-14 ml-lg-14" style="${ssrRenderStyle({ "height": "50vh" })}" data-v-345587e9${_scopeId3}><div class="carousel" data-v-345587e9${_scopeId3}><ul class="carousel__list" data-v-345587e9${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(items), (item, index2) => {
                          _push4(`<li class="${ssrRenderClass([
                            "carousel__item",
                            { carousel__item_active: item.active }
                          ])}"${ssrRenderAttr("data-pos", item.pos)} data-v-345587e9${_scopeId3}><img style="${ssrRenderStyle({ "height": "480px" })}"${ssrRenderAttr("src", getImageUrl(item.text))} alt="carousel-item" data-v-345587e9${_scopeId3}></li>`);
                        });
                        _push4(`<!--]--></ul></div></div><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}><br data-v-345587e9${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("div", {
                            class: "mt-14 mb-14 ml-lg-14",
                            style: { "height": "50vh" }
                          }, [
                            createVNode("div", { class: "carousel" }, [
                              createVNode("ul", { class: "carousel__list" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index2) => {
                                  return openBlock(), createBlock("li", {
                                    key: index2,
                                    class: [
                                      "carousel__item",
                                      { carousel__item_active: item.active }
                                    ],
                                    "data-pos": item.pos,
                                    onClick: ($event) => update(item)
                                  }, [
                                    createVNode("img", {
                                      style: { "height": "480px" },
                                      src: getImageUrl(item.text),
                                      alt: "carousel-item"
                                    }, null, 8, ["src"])
                                  ], 10, ["data-pos", "onClick"]);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("br"),
                          createVNode("br"),
                          createVNode("br")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "5",
                      class: "d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mainblock" }, [
                          createVNode("div", { class: "block" }),
                          createVNode("h1", { class: "text-left sharpsans-h2 head my-auto mb-10" }, " OUR MAESTROS ")
                        ]),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("h1", { class: "text-left sharpsans-h1 ml-lg-5 mb-10" }, [
                          createTextVNode(toDisplayString(getActiveItem().name) + " ", 1),
                          createVNode("p", {
                            style: { "font-size": "12px" },
                            class: "ml-1"
                          }, "Partner")
                        ]),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("p", { class: "text-left ml-lg-5 sharpsans-h4" }, toDisplayString(getActiveItem().description), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      class: "mx-auto",
                      cols: "12",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("div", {
                          class: "mt-14 mb-14 ml-lg-14",
                          style: { "height": "50vh" }
                        }, [
                          createVNode("div", { class: "carousel" }, [
                            createVNode("ul", { class: "carousel__list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index2) => {
                                return openBlock(), createBlock("li", {
                                  key: index2,
                                  class: [
                                    "carousel__item",
                                    { carousel__item_active: item.active }
                                  ],
                                  "data-pos": item.pos,
                                  onClick: ($event) => update(item)
                                }, [
                                  createVNode("img", {
                                    style: { "height": "480px" },
                                    src: getImageUrl(item.text),
                                    alt: "carousel-item"
                                  }, null, 8, ["src"])
                                ], 10, ["data-pos", "onClick"]);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("br"),
                        createVNode("br"),
                        createVNode("br")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "5",
                    class: "d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mainblock" }, [
                        createVNode("div", { class: "block" }),
                        createVNode("h1", { class: "text-left sharpsans-h2 head my-auto mb-10" }, " OUR MAESTROS ")
                      ]),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("h1", { class: "text-left sharpsans-h1 ml-lg-5 mb-10" }, [
                        createTextVNode(toDisplayString(getActiveItem().name) + " ", 1),
                        createVNode("p", {
                          style: { "font-size": "12px" },
                          class: "ml-1"
                        }, "Partner")
                      ]),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("p", { class: "text-left ml-lg-5 sharpsans-h4" }, toDisplayString(getActiveItem().description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    class: "mx-auto",
                    cols: "12",
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("div", {
                        class: "mt-14 mb-14 ml-lg-14",
                        style: { "height": "50vh" }
                      }, [
                        createVNode("div", { class: "carousel" }, [
                          createVNode("ul", { class: "carousel__list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index2) => {
                              return openBlock(), createBlock("li", {
                                key: index2,
                                class: [
                                  "carousel__item",
                                  { carousel__item_active: item.active }
                                ],
                                "data-pos": item.pos,
                                onClick: ($event) => update(item)
                              }, [
                                createVNode("img", {
                                  style: { "height": "480px" },
                                  src: getImageUrl(item.text),
                                  alt: "carousel-item"
                                }, null, 8, ["src"])
                              ], 10, ["data-pos", "onClick"]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createVNode("br"),
                      createVNode("br"),
                      createVNode("br")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VContainer, {
        fluid: "",
        class: "pa-0 ml-lg-6 d-block d-md-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "4",
                    class: "d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mainblock" data-v-345587e9${_scopeId3}><div class="block ml-2" data-v-345587e9${_scopeId3}></div><h1 class="text-left sharpsans-h2 head my-auto mb-10" data-v-345587e9${_scopeId3}> OUR MAESTROS </h1></div><h1 class="text-left sharpsans-h1 mb-10 pa-2" data-v-345587e9${_scopeId3}>${ssrInterpolate(getActiveItem().name)}</h1><p data-v-345587e9${_scopeId3}>Partner</p><p class="text-left sharpsans-h4 pa-2" data-v-345587e9${_scopeId3}>${ssrInterpolate(getActiveItem().description)}</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "mainblock" }, [
                            createVNode("div", { class: "block ml-2" }),
                            createVNode("h1", { class: "text-left sharpsans-h2 head my-auto mb-10" }, " OUR MAESTROS ")
                          ]),
                          createVNode("h1", { class: "text-left sharpsans-h1 mb-10 pa-2" }, toDisplayString(getActiveItem().name), 1),
                          createVNode("p", null, "Partner"),
                          createVNode("p", { class: "text-left sharpsans-h4 pa-2" }, toDisplayString(getActiveItem().description), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-14 mb-14" style="${ssrRenderStyle({ "height": "50vh" })}" data-v-345587e9${_scopeId3}><div class="carousel" data-v-345587e9${_scopeId3}><ul class="carousel__list" data-v-345587e9${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(items), (item, index2) => {
                          _push4(`<li class="${ssrRenderClass([
                            "carousel__item",
                            { carousel__item_active: item.active }
                          ])}"${ssrRenderAttr("data-pos", item.pos)} data-v-345587e9${_scopeId3}><img style="${ssrRenderStyle({ "height": "480px" })}"${ssrRenderAttr("src", getImageUrl(item.text))} alt="carousel-item" data-v-345587e9${_scopeId3}></li>`);
                        });
                        _push4(`<!--]--></ul></div></div><br data-v-345587e9${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "mt-14 mb-14",
                            style: { "height": "50vh" }
                          }, [
                            createVNode("div", { class: "carousel" }, [
                              createVNode("ul", { class: "carousel__list" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index2) => {
                                  return openBlock(), createBlock("li", {
                                    key: index2,
                                    class: [
                                      "carousel__item",
                                      { carousel__item_active: item.active }
                                    ],
                                    "data-pos": item.pos,
                                    onClick: ($event) => update(item)
                                  }, [
                                    createVNode("img", {
                                      style: { "height": "480px" },
                                      src: getImageUrl(item.text),
                                      alt: "carousel-item"
                                    }, null, 8, ["src"])
                                  ], 10, ["data-pos", "onClick"]);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("br")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "4",
                      class: "d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mainblock" }, [
                          createVNode("div", { class: "block ml-2" }),
                          createVNode("h1", { class: "text-left sharpsans-h2 head my-auto mb-10" }, " OUR MAESTROS ")
                        ]),
                        createVNode("h1", { class: "text-left sharpsans-h1 mb-10 pa-2" }, toDisplayString(getActiveItem().name), 1),
                        createVNode("p", null, "Partner"),
                        createVNode("p", { class: "text-left sharpsans-h4 pa-2" }, toDisplayString(getActiveItem().description), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "mt-14 mb-14",
                          style: { "height": "50vh" }
                        }, [
                          createVNode("div", { class: "carousel" }, [
                            createVNode("ul", { class: "carousel__list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index2) => {
                                return openBlock(), createBlock("li", {
                                  key: index2,
                                  class: [
                                    "carousel__item",
                                    { carousel__item_active: item.active }
                                  ],
                                  "data-pos": item.pos,
                                  onClick: ($event) => update(item)
                                }, [
                                  createVNode("img", {
                                    style: { "height": "480px" },
                                    src: getImageUrl(item.text),
                                    alt: "carousel-item"
                                  }, null, 8, ["src"])
                                ], 10, ["data-pos", "onClick"]);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("br")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "4",
                    class: "d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mainblock" }, [
                        createVNode("div", { class: "block ml-2" }),
                        createVNode("h1", { class: "text-left sharpsans-h2 head my-auto mb-10" }, " OUR MAESTROS ")
                      ]),
                      createVNode("h1", { class: "text-left sharpsans-h1 mb-10 pa-2" }, toDisplayString(getActiveItem().name), 1),
                      createVNode("p", null, "Partner"),
                      createVNode("p", { class: "text-left sharpsans-h4 pa-2" }, toDisplayString(getActiveItem().description), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "mt-14 mb-14",
                        style: { "height": "50vh" }
                      }, [
                        createVNode("div", { class: "carousel" }, [
                          createVNode("ul", { class: "carousel__list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index2) => {
                              return openBlock(), createBlock("li", {
                                key: index2,
                                class: [
                                  "carousel__item",
                                  { carousel__item_active: item.active }
                                ],
                                "data-pos": item.pos,
                                onClick: ($event) => update(item)
                              }, [
                                createVNode("img", {
                                  style: { "height": "480px" },
                                  src: getImageUrl(item.text),
                                  alt: "carousel-item"
                                }, null, 8, ["src"])
                              ], 10, ["data-pos", "onClick"]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createVNode("br")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Maestros.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-345587e9"]]);
const _imports_0$1 = "" + publicAssetsURL("images/globeround.png");
const _imports_1 = "" + publicAssetsURL("images/smalllogo.png");
const _imports_2$1 = "" + publicAssetsURL("images/roundlogo.png");
const makeVBtnGroupProps = propsFactory({
  divided: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, "VBtnGroup");
const VBtnGroup = genericComponent()({
  name: "VBtnGroup",
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: "auto",
        color: toRef(props, "color"),
        density: toRef(props, "density"),
        flat: true,
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-btn-group", {
          "v-btn-group--divided": props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": props.style
      }, slots);
    });
  }
});
const makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group");
const makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const vm = getCurrentInstance("useGroupItem");
  if (!vm) {
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  }
  const id = getUid();
  provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = inject(injectKey, null);
  if (!group) {
    if (!required)
      return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = toRef(props, "value");
  const disabled = computed(() => !!(group.disabled.value || props.disabled));
  group.register({
    id,
    value,
    disabled
  }, vm);
  const isSelected = computed(() => {
    return group.isSelected(id);
  });
  const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  watch(isSelected, (value2) => {
    vm.emit("group:selected", {
      value: value2
    });
  });
  return {
    id,
    isSelected,
    toggle: () => group.select(id, !isSelected.value),
    select: (value2) => group.select(id, value2),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  const items = reactive([]);
  const selected = useProxiedModel(props, "modelValue", [], (v) => {
    if (v == null)
      return [];
    return getIds(items, wrapInArray(v));
  }, (v) => {
    const arr = getValues(items, v);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance("useGroup");
  function register(item, vm) {
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
    const index2 = children.indexOf(vm);
    if (index2 > -1) {
      items.splice(index2, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    forceMandatoryValue();
    const index2 = items.findIndex((item) => item.id === id);
    items.splice(index2, 1);
  }
  function forceMandatoryValue() {
    const item = items.find((item2) => !item2.disabled);
    if (item && props.mandatory === "force" && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  function select(id, value) {
    const item = items.find((item2) => item2.id === id);
    if (value && (item == null ? void 0 : item.disabled))
      return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index2 = internalValue.findIndex((v) => v === id);
      const isSelected = ~index2;
      value = value != null ? value : !isSelected;
      if (isSelected && props.mandatory && internalValue.length <= 1)
        return;
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max)
        return;
      if (index2 < 0 && value)
        internalValue.push(id);
      else if (index2 >= 0 && !value)
        internalValue.splice(index2, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected)
        return;
      selected.value = (value != null ? value : !isSelected) ? [id] : [];
    }
  }
  function step(offset) {
    if (props.multiple)
      consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find((item2) => !item2.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex((i) => i.id === currentId);
      let newIndex = (currentIndex + offset) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled)
        return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: toRef(props, "disabled"),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: (id) => selected.value.includes(id),
    selectedClass: computed(() => props.selectedClass),
    items: computed(() => items),
    getItemIndex: (value) => getItemIndex(items, value)
  };
  provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length)
    return -1;
  return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  modelValue.forEach((value) => {
    const item = items.find((item2) => deepEqual(value, item2.value));
    const itemByIndex = items[value];
    if ((item == null ? void 0 : item.value) != null) {
      ids.push(item.id);
    } else if (itemByIndex != null) {
      ids.push(itemByIndex.id);
    }
  });
  return ids;
}
function getValues(items, ids) {
  const values = [];
  ids.forEach((id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (~itemIndex) {
      const item = items[itemIndex];
      values.push(item.value != null ? item.value : itemIndex);
    }
  });
  return values;
}
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
const makeVBtnToggleProps = propsFactory({
  ...makeVBtnGroupProps(),
  ...makeGroupProps()
}, "VBtnToggle");
genericComponent()({
  name: "VBtnToggle",
  props: makeVBtnToggleProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      const btnGroupProps = VBtnGroup.filterProps(props);
      return createVNode(VBtnGroup, mergeProps({
        "class": ["v-btn-toggle", props.class]
      }, btnGroupProps, {
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            next,
            prev,
            select,
            selected
          })];
        }
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});
function useIntersectionObserver(callback, options) {
  const intersectionRef = ref();
  const isIntersecting = shallowRef(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver((entries) => {
      callback == null ? void 0 : callback(entries, observer);
      isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
    }, options);
    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue)
        observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}
const makeVProgressCircularProps = propsFactory({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "div"
  }),
  ...makeThemeProps()
}, "VProgressCircular");
const VProgressCircular = genericComponent()({
  name: "VProgressCircular",
  props: makeVProgressCircularProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(toRef(props, "bgColor"));
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
    const width = computed(() => Number(props.width));
    const size = computed(() => {
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
    const strokeWidth = computed(() => width.value / size.value * diameter.value);
    const strokeDashOffset = computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => createVNode(props.tag, {
      "ref": root,
      "class": ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!props.indeterminate,
        "v-progress-circular--visible": isIntersecting.value,
        "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
      }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class],
      "style": [sizeStyles.value, textColorStyles.value, props.style],
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
    }, {
      default: () => [createVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [createVNode("circle", {
        "class": ["v-progress-circular__underlay", underlayColorClasses.value],
        "style": underlayColorStyles.value,
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), createVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && createVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});
const makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VProgressLinear");
const VProgressLinear = genericComponent()({
  name: "VProgressLinear",
  props: makeVProgressLinearProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, "color");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, "color");
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseInt(props.max, 10));
    const height = computed(() => parseInt(props.height, 10));
    const normalizedBuffer = computed(() => parseFloat(props.bufferValue) / max.value * 100);
    const normalizedValue = computed(() => parseFloat(progress.value) / max.value * 100);
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    const opacity = computed(() => {
      return props.bgOpacity == null ? props.bgOpacity : parseFloat(props.bgOpacity);
    });
    function handleClick(e) {
      if (!intersectionRef.value)
        return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ["v-progress-linear", {
        "v-progress-linear--absolute": props.absolute,
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
      "style": [{
        bottom: props.location === "bottom" ? 0 : void 0,
        top: props.location === "top" ? 0 : void 0,
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value),
        ...locationStyles.value
      }, props.style],
      "role": "progressbar",
      "aria-hidden": props.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value,
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createVNode("div", {
        "key": "stream",
        "class": ["v-progress-linear__stream", textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: opacity.value,
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createVNode("div", {
        "class": ["v-progress-linear__background", backgroundColorClasses.value],
        "style": [backgroundColorStyles.value, {
          opacity: opacity.value,
          width: convertToUnit(!props.stream ? 100 : normalizedBuffer.value, "%")
        }]
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createVNode("div", {
          "class": ["v-progress-linear__determinate", barColorClasses.value],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }]
        }, null) : createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createVNode("div", {
          "key": bar,
          "class": ["v-progress-linear__indeterminate", bar, barColorClasses.value],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
const makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = computed(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _a;
  let {
    slots
  } = _ref;
  return createVNode("div", {
    "class": `${props.name}__loader`
  }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}
function useSelectLink(link, select) {
  watch(() => {
    var _a;
    return (_a = link.isActive) == null ? void 0 : _a.value;
  }, (isActive) => {
    if (link.isLink.value && isActive && select) {
      nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}
const makeVBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: VBtnToggleSymbol
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: IconValue,
  appendIcon: IconValue,
  block: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "button"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VBtn");
const VBtn = genericComponent()({
  name: "VBtn",
  directives: {
    Ripple
  },
  props: makeVBtnProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      if (props.active !== void 0) {
        return props.active;
      }
      if (link.isLink.value) {
        return (_a = link.isActive) == null ? void 0 : _a.value;
      }
      return group == null ? void 0 : group.isSelected.value;
    });
    const isDisabled = computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
    const isElevated = computed(() => {
      return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = computed(() => {
      if (props.value === void 0 || typeof props.value === "symbol")
        return void 0;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    function onClick(e) {
      var _a;
      if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank"))
        return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    useSelectLink(link, group == null ? void 0 : group.select);
    useRender(() => {
      var _a, _b;
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      const hasColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_a = link.isActive) == null ? void 0 : _a.value)) || !group || ((_b = link.isActive) == null ? void 0 : _b.value);
      return withDirectives(createVNode(Tag, {
        "type": Tag === "a" ? void 0 : "button",
        "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
          "v-btn--active": isActive.value,
          "v-btn--block": props.block,
          "v-btn--disabled": isDisabled.value,
          "v-btn--elevated": isElevated.value,
          "v-btn--flat": props.flat,
          "v-btn--icon": !!props.icon,
          "v-btn--loading": props.loading,
          "v-btn--slim": props.slim,
          "v-btn--stacked": props.stacked
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
        "disabled": isDisabled.value || void 0,
        "href": link.href.value,
        "onClick": onClick,
        "value": valueAttr.value
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && createVNode("span", {
            "key": "prepend",
            "class": "v-btn__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.prependIcon,
            "defaults": {
              VIcon: {
                icon: props.prependIcon
              }
            }
          }, slots.prepend)]), createVNode("span", {
            "class": "v-btn__content",
            "data-no-activator": ""
          }, [!slots.default && hasIcon ? createVNode(VIcon, {
            "key": "content-icon",
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "content-defaults",
            "disabled": !hasIcon,
            "defaults": {
              VIcon: {
                icon: props.icon
              }
            }
          }, {
            default: () => {
              var _a4;
              var _a32;
              return [(_a4 = (_a32 = slots.default) == null ? void 0 : _a32.call(slots)) != null ? _a4 : props.text];
            }
          })]), !props.icon && hasAppend && createVNode("span", {
            "key": "append",
            "class": "v-btn__append"
          }, [!slots.append ? createVNode(VIcon, {
            "key": "append-icon",
            "icon": props.appendIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !props.appendIcon,
            "defaults": {
              VIcon: {
                icon: props.appendIcon
              }
            }
          }, slots.append)]), !!props.loading && createVNode("span", {
            "key": "loader",
            "class": "v-btn__loader"
          }, [(_a3 = (_a2 = slots.loader) == null ? void 0 : _a2.call(slots)) != null ? _a3 : createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "size": "23",
            "width": "2"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), !isDisabled.value && props.ripple, null]]);
    });
    return {};
  }
});
const makeVCounterProps = propsFactory({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps$1({
    transition: {
      component: VSlideYTransition
    }
  })
}, "VCounter");
const VCounter = genericComponent()({
  name: "VCounter",
  functional: true,
  props: makeVCounterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = computed(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": ["v-counter", props.class],
        "style": props.style
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vShow, props.active]])]
    }));
    return {};
  }
});
const makeVLabelProps = propsFactory({
  text: String,
  clickable: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("label", {
        "class": ["v-label", {
          "v-label--clickable": props.clickable
        }, props.class],
        "style": props.style
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, "VFieldLabel");
const VFieldLabel = genericComponent()({
  name: "VFieldLabel",
  props: makeVFieldLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VLabel, {
      "class": ["v-field-label", {
        "v-field-label--floating": props.floating
      }, props.class],
      "style": props.style,
      "aria-hidden": props.floating || void 0
    }, slots));
    return {};
  }
});
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    var _a;
    let {
      name
    } = _ref;
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, (_a = props.label) != null ? _a : "") : void 0;
    return createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener
    }, null);
  }
  return {
    InputIcon
  };
}
const makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = computed(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}
const allowedVariants = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"];
const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (v) => allowedVariants.includes(v)
  },
  "onClick:clear": EventProp(),
  "onClick:appendInner": EventProp(),
  "onClick:prependInner": EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, "VField");
const VField = genericComponent()({
  name: "VField",
  inheritAttrs: false,
  props: {
    id: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = computed(() => props.dirty || props.active);
    const hasLabel = computed(() => !props.singleLine && !!(props.label || slots.label));
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => {
      return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
    }));
    watch(isActive, (val) => {
      if (hasLabel.value) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : void 0;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
          const color = targetStyle.getPropertyValue("color");
          el.style.visibility = "visible";
          targetEl.style.visibility = "hidden";
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? "normal" : "reverse"
          }).finished.then(() => {
            el.style.removeProperty("visibility");
            targetEl.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      blur,
      focus
    }));
    function onClick(e) {
      if (e.target !== document.activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      var _a2;
      var _a, _b, _c;
      const isOutlined = props.variant === "outlined";
      const hasPrepend = slots["prepend-inner"] || props.prependInnerIcon;
      const hasClear = !!(props.clearable || slots.clear);
      const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
      const label = slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode("div", mergeProps({
        "class": ["v-field", {
          "v-field--active": isActive.value,
          "v-field--appended": hasAppend,
          "v-field--center-affix": (_a2 = props.centerAffix) != null ? _a2 : !isPlainOrUnderlined.value,
          "v-field--disabled": props.disabled,
          "v-field--dirty": props.dirty,
          "v-field--error": props.error,
          "v-field--flat": props.flat,
          "v-field--has-background": !!props.bgColor,
          "v-field--persistent-clear": props.persistentClear,
          "v-field--prepended": hasPrepend,
          "v-field--reverse": props.reverse,
          "v-field--single-line": props.singleLine,
          "v-field--no-label": !label,
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [createVNode("div", {
        "class": "v-field__overlay"
      }, null), createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
      }, {
        default: slots.loader
      }), hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [props.prependInnerIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner"
      }, null), (_a = slots["prepend-inner"]) == null ? void 0 : _a.call(slots, slotProps.value)]), createVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(props.variant) && hasLabel.value && createVNode(VFieldLabel, {
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true,
        "for": id.value,
        "style": textColorStyles.value
      }, {
        default: () => [label]
      }), createVNode(VFieldLabel, {
        "ref": labelRef,
        "for": id.value
      }, {
        default: () => [label]
      }), (_b = slots.default) == null ? void 0 : _b.call(slots, {
        ...slotProps.value,
        props: {
          id: id.value,
          class: "v-field__input",
          "aria-describedby": messagesId.value
        },
        focus,
        blur
      })]), hasClear && createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [slots.clear ? slots.clear() : createVNode(InputIcon, {
          "name": "clear"
        }, null)]), [[vShow, props.dirty]])]
      }), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [(_c = slots["append-inner"]) == null ? void 0 : _c.call(slots, slotProps.value), props.appendInnerIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner"
      }, null)]), createVNode("div", {
        "class": ["v-field__outline", textColorClasses.value],
        "style": textColorStyles.value
      }, [isOutlined && createVNode(Fragment, null, [createVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasLabel.value && createVNode("div", {
        "class": "v-field__outline__notch"
      }, [createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })]), createVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasLabel.value && createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })])]);
    });
    return {
      controlRef
    };
  }
});
function filterFieldProps(attrs) {
  const keys = Object.keys(VField.props).filter((k) => !isOn(k) && k !== "class" && k !== "style");
  return pick(attrs, keys);
}
const makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps$1({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, "VMessages");
const VMessages = genericComponent()({
  name: "VMessages",
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => props.color));
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": ["v-messages", textColorClasses.value, props.class],
      "style": [textColorStyles.value, props.style],
      "role": "alert",
      "aria-live": "polite"
    }, {
      default: () => [props.active && messages.value.map((message, i) => createVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});
const FormKey = Symbol.for("vuetify:form");
function useForm() {
  return inject(FormKey, null);
}
const makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getUid();
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm();
  const internalErrorMessages = ref([]);
  const isPristine = shallowRef(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const isDisabled = computed(() => {
    var _a;
    return !!((_a = props.disabled) != null ? _a : form == null ? void 0 : form.isDisabled.value);
  });
  const isReadonly = computed(() => {
    var _a;
    return !!((_a = props.readonly) != null ? _a : form == null ? void 0 : form.isReadonly.value);
  });
  const errorMessages = computed(() => {
    var _a;
    return ((_a = props.errorMessages) == null ? void 0 : _a.length) ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
  });
  const validateOn = computed(() => {
    var _a, _b;
    let value = ((_a = props.validateOn) != null ? _a : form == null ? void 0 : form.validateOn.value) || "input";
    if (value === "lazy")
      value = "input lazy";
    const set = new Set((_b = value == null ? void 0 : value.split(" ")) != null ? _b : []);
    return {
      blur: set.has("blur") || set.has("input"),
      input: set.has("input"),
      submit: set.has("submit"),
      lazy: set.has("lazy")
    };
  });
  const isValid = computed(() => {
    var _a;
    if (props.error || ((_a = props.errorMessages) == null ? void 0 : _a.length))
      return false;
    if (!props.rules.length)
      return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = shallowRef(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: isDisabled.value,
      [`${name}--readonly`]: isReadonly.value
    };
  });
  const uid = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : unref(id);
  });
  useToggleScope(() => validateOn.value.input, () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val)
            validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    watch(() => props.focused, (val) => {
      if (!val)
        validate();
    });
  });
  watch(isValid, () => {
    form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value);
  });
  function reset() {
    model.value = null;
    nextTick(resetValidation);
  }
  function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      validate(true);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate() {
    var _a;
    let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= +((_a = props.maxErrors) != null ? _a : 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true)
        continue;
      if (result !== false && typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result || "");
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled,
    isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  centerAffix: {
    type: Boolean,
    default: true
  },
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeValidationProps()
}, "VInput");
const VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const messages = computed(() => {
      var _a;
      if (((_a = props.errorMessages) == null ? void 0 : _a.length) || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      var _a, _b, _c, _d;
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
      return createVNode("div", {
        "class": ["v-input", `v-input--${props.direction}`, {
          "v-input--center-affix": props.centerAffix,
          "v-input--hide-spin-buttons": props.hideSpinButtons
        }, densityClasses.value, rtlClasses.value, validationClasses.value, props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend"
      }, null)]), slots.default && createVNode("div", {
        "class": "v-input__control"
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append"
      }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && createVNode("div", {
        "class": "v-input__details"
      }, [createVNode(VMessages, {
        "id": messagesId.value,
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate,
      isValid,
      errorMessages
    };
  }
});
const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextField");
const VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    Intersect: Intersect$1
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      var _a;
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : ((_a = model.value) != null ? _a : "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (inputRef.value !== document.activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value)
        return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": props.role
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = withDirectives(createVNode("input", mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [createVNode("span", {
                "class": "v-text-field__prefix__text"
              }, [props.prefix])]), slots.default ? createVNode("div", {
                "class": fieldClass,
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [createVNode("span", {
                "class": "v-text-field__suffix__text"
              }, [props.suffix])])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))} data-v-314dbf7c>`);
  _push(ssrRenderComponent(VContainer, { class: "d-none d-md-block" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "my-auto",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="globe" data-v-314dbf7c${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_0$1,
                      height: "400"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="logosmall" data-v-314dbf7c${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_1,
                      width: "70"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="logosmall" data-v-314dbf7c${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_2$1,
                      width: "100",
                      class: "roundlogo"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "globe" }, [
                        createVNode(VImg, {
                          src: _imports_0$1,
                          height: "400"
                        }),
                        createVNode("div", { class: "logosmall" }, [
                          createVNode(VImg, {
                            src: _imports_1,
                            width: "70"
                          })
                        ]),
                        createVNode("div", { class: "logosmall" }, [
                          createVNode(VImg, {
                            src: _imports_2$1,
                            width: "100",
                            class: "roundlogo"
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "10" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h1 class="heading" data-v-314dbf7c${_scopeId5}>Collaborate With Us</h1><p class="para" data-v-314dbf7c${_scopeId5}> Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. </p>`);
                              } else {
                                return [
                                  createVNode("h1", { class: "heading" }, "Collaborate With Us"),
                                  createVNode("p", { class: "para" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "10" }, {
                              default: withCtx(() => [
                                createVNode("h1", { class: "heading" }, "Collaborate With Us"),
                                createVNode("p", { class: "para" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Name",
                                  variant: "outlined",
                                  class: "mt-5"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Name",
                                    variant: "outlined",
                                    class: "mt-5"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Email ID",
                                  variant: "outlined",
                                  class: "mt-5"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Email ID",
                                    variant: "outlined",
                                    class: "mt-5"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Company Name",
                                  variant: "outlined",
                                  class: "pa-0"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Company Name",
                                    variant: "outlined",
                                    class: "pa-0"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Mobile Number",
                                  variant: "outlined"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Mobile Number",
                                    variant: "outlined"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Name",
                                  variant: "outlined",
                                  class: "mt-5"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Email ID",
                                  variant: "outlined",
                                  class: "mt-5"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Company Name",
                                  variant: "outlined",
                                  class: "pa-0"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Mobile Number",
                                  variant: "outlined"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Submit `);
                                    } else {
                                      return [
                                        createTextVNode(" Submit ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "10" }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "heading" }, "Collaborate With Us"),
                              createVNode("p", { class: "para" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Name",
                                variant: "outlined",
                                class: "mt-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Email ID",
                                variant: "outlined",
                                class: "mt-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Company Name",
                                variant: "outlined",
                                class: "pa-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Mobile Number",
                                variant: "outlined"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "my-auto",
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "globe" }, [
                      createVNode(VImg, {
                        src: _imports_0$1,
                        height: "400"
                      }),
                      createVNode("div", { class: "logosmall" }, [
                        createVNode(VImg, {
                          src: _imports_1,
                          width: "70"
                        })
                      ]),
                      createVNode("div", { class: "logosmall" }, [
                        createVNode(VImg, {
                          src: _imports_2$1,
                          width: "100",
                          class: "roundlogo"
                        })
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "10" }, {
                          default: withCtx(() => [
                            createVNode("h1", { class: "heading" }, "Collaborate With Us"),
                            createVNode("p", { class: "para" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Name",
                              variant: "outlined",
                              class: "mt-5"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Email ID",
                              variant: "outlined",
                              class: "mt-5"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Company Name",
                              variant: "outlined",
                              class: "pa-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Mobile Number",
                              variant: "outlined"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<br data-v-314dbf7c${_scopeId}>`);
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "my-auto",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "globe" }, [
                    createVNode(VImg, {
                      src: _imports_0$1,
                      height: "400"
                    }),
                    createVNode("div", { class: "logosmall" }, [
                      createVNode(VImg, {
                        src: _imports_1,
                        width: "70"
                      })
                    ]),
                    createVNode("div", { class: "logosmall" }, [
                      createVNode(VImg, {
                        src: _imports_2$1,
                        width: "100",
                        class: "roundlogo"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "10" }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "heading" }, "Collaborate With Us"),
                          createVNode("p", { class: "para" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Name",
                            variant: "outlined",
                            class: "mt-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Email ID",
                            variant: "outlined",
                            class: "mt-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Company Name",
                            variant: "outlined",
                            class: "pa-0"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Mobile Number",
                            variant: "outlined"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, { class: "d-block d-md-none" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "my-auto",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="globe" data-v-314dbf7c${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_0$1,
                      height: "400"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="logosmall" data-v-314dbf7c${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_1,
                      width: "70"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="logosmall" data-v-314dbf7c${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_2$1,
                      width: "100"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "globe" }, [
                        createVNode(VImg, {
                          src: _imports_0$1,
                          height: "400"
                        }),
                        createVNode("div", { class: "logosmall" }, [
                          createVNode(VImg, {
                            src: _imports_1,
                            width: "70"
                          })
                        ]),
                        createVNode("div", { class: "logosmall" }, [
                          createVNode(VImg, {
                            src: _imports_2$1,
                            width: "100"
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "10" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="d-flex" data-v-314dbf7c${_scopeId5}><div class="block my-auto" data-v-314dbf7c${_scopeId5}></div><h1 class="headingsmall" data-v-314dbf7c${_scopeId5}>Collaborate With Us</h1></div><p class="para text-left" data-v-314dbf7c${_scopeId5}> Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. </p>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode("div", { class: "block my-auto" }),
                                    createVNode("h1", { class: "headingsmall" }, "Collaborate With Us")
                                  ]),
                                  createVNode("p", { class: "para text-left" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "10" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode("div", { class: "block my-auto" }),
                                  createVNode("h1", { class: "headingsmall" }, "Collaborate With Us")
                                ]),
                                createVNode("p", { class: "para text-left" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Name",
                                  variant: "outlined",
                                  class: "mt-5"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Name",
                                    variant: "outlined",
                                    class: "mt-5"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Email ID",
                                  variant: "outlined",
                                  class: "mt-5"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Email ID",
                                    variant: "outlined",
                                    class: "mt-5"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Company Name",
                                  variant: "outlined",
                                  class: "pa-0"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Company Name",
                                    variant: "outlined",
                                    class: "pa-0"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VTextField, {
                                  label: "Mobile Number",
                                  variant: "outlined"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VTextField, {
                                    label: "Mobile Number",
                                    variant: "outlined"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Name",
                                  variant: "outlined",
                                  class: "mt-5"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Email ID",
                                  variant: "outlined",
                                  class: "mt-5"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Company Name",
                                  variant: "outlined",
                                  class: "pa-0"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              lg: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Mobile Number",
                                  variant: "outlined"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            class: "text-center",
                            cols: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Submit `);
                                    } else {
                                      return [
                                        createTextVNode(" Submit ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Submit ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, {
                              class: "text-center",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Submit ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "10" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex" }, [
                                createVNode("div", { class: "block my-auto" }),
                                createVNode("h1", { class: "headingsmall" }, "Collaborate With Us")
                              ]),
                              createVNode("p", { class: "para text-left" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Name",
                                variant: "outlined",
                                class: "mt-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Email ID",
                                variant: "outlined",
                                class: "mt-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Company Name",
                                variant: "outlined",
                                class: "pa-0"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Mobile Number",
                                variant: "outlined"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            class: "text-center",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "my-auto",
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "globe" }, [
                      createVNode(VImg, {
                        src: _imports_0$1,
                        height: "400"
                      }),
                      createVNode("div", { class: "logosmall" }, [
                        createVNode(VImg, {
                          src: _imports_1,
                          width: "70"
                        })
                      ]),
                      createVNode("div", { class: "logosmall" }, [
                        createVNode(VImg, {
                          src: _imports_2$1,
                          width: "100"
                        })
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "10" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex" }, [
                              createVNode("div", { class: "block my-auto" }),
                              createVNode("h1", { class: "headingsmall" }, "Collaborate With Us")
                            ]),
                            createVNode("p", { class: "para text-left" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Name",
                              variant: "outlined",
                              class: "mt-5"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Email ID",
                              variant: "outlined",
                              class: "mt-5"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Company Name",
                              variant: "outlined",
                              class: "pa-0"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          lg: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Mobile Number",
                              variant: "outlined"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          class: "text-center",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                              default: withCtx(() => [
                                createTextVNode(" Submit ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<br data-v-314dbf7c${_scopeId}>`);
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "my-auto",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "globe" }, [
                    createVNode(VImg, {
                      src: _imports_0$1,
                      height: "400"
                    }),
                    createVNode("div", { class: "logosmall" }, [
                      createVNode(VImg, {
                        src: _imports_1,
                        width: "70"
                      })
                    ]),
                    createVNode("div", { class: "logosmall" }, [
                      createVNode(VImg, {
                        src: _imports_2$1,
                        width: "100"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "10" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex" }, [
                            createVNode("div", { class: "block my-auto" }),
                            createVNode("h1", { class: "headingsmall" }, "Collaborate With Us")
                          ]),
                          createVNode("p", { class: "para text-left" }, " Join us at the confluence where creativity and strategy blend, charting courses through the captivating waters of the market, navigating towards unparalleled success. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Name",
                            variant: "outlined",
                            class: "mt-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Email ID",
                            variant: "outlined",
                            class: "mt-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Company Name",
                            variant: "outlined",
                            class: "pa-0"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        lg: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Mobile Number",
                            variant: "outlined"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        class: "text-center",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, { style: { "background-color": "#138064e5", "color": "white", "font-weight": "600" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Submit ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("br")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Collaborate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-314dbf7c"]]);
const _imports_0 = "" + publicAssetsURL("images/connect1.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-b1b1e194><br data-v-b1b1e194>`);
  _push(ssrRenderComponent(VContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "text-center my-auto",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="images"${ssrRenderAttr("src", _imports_0)} alt="" data-v-b1b1e194${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "images",
                        src: _imports_0,
                        alt: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                class: "mt-5",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h1 data-v-b1b1e194${_scopeId5}>Connect</h1>`);
                              } else {
                                return [
                                  createVNode("h1", null, "Connect")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { cols: "10" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p class="para mb-5" data-v-b1b1e194${_scopeId5}> From the pulsating heart of Bangalore, we\u2019re crafting, strategizing, and subtly sprinkling marketing magic into the river of digital influence. Are you ready to dive in? </p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "para mb-5" }, " From the pulsating heart of Bangalore, we\u2019re crafting, strategizing, and subtly sprinkling marketing magic into the river of digital influence. Are you ready to dive in? ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            class: "mt-5"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h1 class="heading" data-v-b1b1e194${_scopeId5}>Are you ready to dive in ?</h1>`);
                              } else {
                                return [
                                  createVNode("h1", { class: "heading" }, "Are you ready to dive in ?")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("h1", null, "Connect")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "10" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "para mb-5" }, " From the pulsating heart of Bangalore, we\u2019re crafting, strategizing, and subtly sprinkling marketing magic into the river of digital influence. Are you ready to dive in? ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              class: "mt-5"
                            }, {
                              default: withCtx(() => [
                                createVNode("h1", { class: "heading" }, "Are you ready to dive in ?")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("h1", null, "Connect")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "10" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "para mb-5" }, " From the pulsating heart of Bangalore, we\u2019re crafting, strategizing, and subtly sprinkling marketing magic into the river of digital influence. Are you ready to dive in? ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", { class: "heading" }, "Are you ready to dive in ?")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "text-center my-auto",
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "images",
                      src: _imports_0,
                      alt: ""
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  class: "mt-5",
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("h1", null, "Connect")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "10" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "para mb-5" }, " From the pulsating heart of Bangalore, we\u2019re crafting, strategizing, and subtly sprinkling marketing magic into the river of digital influence. Are you ready to dive in? ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "mt-5"
                        }, {
                          default: withCtx(() => [
                            createVNode("h1", { class: "heading" }, "Are you ready to dive in ?")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "text-center my-auto",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "images",
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                class: "mt-5",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode("h1", null, "Connect")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "10" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "para mb-5" }, " From the pulsating heart of Bangalore, we\u2019re crafting, strategizing, and subtly sprinkling marketing magic into the river of digital influence. Are you ready to dive in? ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "mt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "heading" }, "Are you ready to dive in ?")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConnectMain.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-b1b1e194"]]);
const _imports_2 = "" + publicAssetsURL("images/footerlogo.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e65289e7><div class="d-none d-md-block" data-v-e65289e7><div data-v-e65289e7>`);
  _push(ssrRenderComponent(VContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="scrolling-container" data-v-e65289e7${_scopeId3}><div class="scrolling-images" data-v-e65289e7${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, { src: _imports_0$4 }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VImg, { src: _imports_1$2 }, null, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "scrolling-container" }, [
                        createVNode("div", { class: "scrolling-images" }, [
                          createVNode(VImg, { src: _imports_0$4 }),
                          createVNode(VImg, { src: _imports_1$2 })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "scrolling-container" }, [
                      createVNode("div", { class: "scrolling-images" }, [
                        createVNode(VImg, { src: _imports_0$4 }),
                        createVNode(VImg, { src: _imports_1$2 })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "scrolling-container" }, [
                    createVNode("div", { class: "scrolling-images" }, [
                      createVNode(VImg, { src: _imports_0$4 }),
                      createVNode(VImg, { src: _imports_1$2 })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, {
    fluid: "",
    class: "pa-10 mb-10"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { class: "mx-auto ml-lg-10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "text-left",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 data-v-e65289e7${_scopeId3}>Promise</h1><p class="para" data-v-e65289e7${_scopeId3}> With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. </p>`);
                  } else {
                    return [
                      createVNode("h1", null, "Promise"),
                      createVNode("p", { class: "para" }, " With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                class: "mx-auto",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      class: "mx-auto",
                      src: _imports_2,
                      width: "400"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        class: "mx-auto",
                        src: _imports_2,
                        width: "400"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "text-left",
                  cols: "12",
                  xxl: "6",
                  xl: "6",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", null, "Promise"),
                    createVNode("p", { class: "para" }, " With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. ")
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  class: "mx-auto",
                  cols: "12",
                  xxl: "6",
                  xl: "6",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      class: "mx-auto",
                      src: _imports_2,
                      width: "400"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, { class: "mx-auto ml-lg-10" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "text-left",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode("h1", null, "Promise"),
                  createVNode("p", { class: "para" }, " With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. ")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                class: "mx-auto",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    class: "mx-auto",
                    src: _imports_2,
                    width: "400"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "background-color": "#0b0f26" })}" data-v-e65289e7>`);
  _push(ssrRenderComponent(VContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "text-center ml-lg-10",
                cols: "12",
                lg: "5"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>2023 White Water Media.</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "2023 White Water Media.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            class: "text-left",
                            cols: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>All rights reserved.</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "All rights reserved.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode("p", null, "2023 White Water Media.")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              class: "text-left",
                              cols: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "All rights reserved.")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode("p", null, "2023 White Water Media.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            class: "text-left",
                            cols: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, "All rights reserved.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                class: "text-center",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            class: "text-right",
                            cols: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>Privacy Policy</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "Privacy Policy")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>Terms of Service</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "Terms of Service")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, {
                              class: "text-right",
                              cols: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "Privacy Policy")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode("p", null, "Terms of Service")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            class: "text-right",
                            cols: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, "Privacy Policy")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode("p", null, "Terms of Service")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "text-center ml-lg-10",
                  cols: "12",
                  lg: "5"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "2023 White Water Media.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          class: "text-left",
                          cols: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, "All rights reserved.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  class: "text-center",
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          class: "text-right",
                          cols: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Privacy Policy")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Terms of Service")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "text-center ml-lg-10",
                cols: "12",
                lg: "5"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "2023 White Water Media.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        class: "text-left",
                        cols: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, "All rights reserved.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                class: "text-center",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        class: "text-right",
                        cols: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Privacy Policy")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Terms of Service")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="d-block d-md-none" data-v-e65289e7><div data-v-e65289e7>`);
  _push(ssrRenderComponent(VContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="scrolling-container" data-v-e65289e7${_scopeId3}><div class="scrolling-images" data-v-e65289e7${_scopeId3}>`);
                    _push4(ssrRenderComponent(VImg, { src: _imports_0$4 }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VImg, { src: _imports_1$2 }, null, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "scrolling-container" }, [
                        createVNode("div", { class: "scrolling-images" }, [
                          createVNode(VImg, { src: _imports_0$4 }),
                          createVNode(VImg, { src: _imports_1$2 })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "scrolling-container" }, [
                      createVNode("div", { class: "scrolling-images" }, [
                        createVNode(VImg, { src: _imports_0$4 }),
                        createVNode(VImg, { src: _imports_1$2 })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "scrolling-container" }, [
                    createVNode("div", { class: "scrolling-images" }, [
                      createVNode(VImg, { src: _imports_0$4 }),
                      createVNode(VImg, { src: _imports_1$2 })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, {
    fluid: "",
    class: "pa-5 mb-10"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { class: "mx-auto ml-lg-10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "text-left",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="text-center" data-v-e65289e7${_scopeId3}>Promise</h1><p class="para text-center mt-2 mb-5" data-v-e65289e7${_scopeId3}> With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. </p>`);
                  } else {
                    return [
                      createVNode("h1", { class: "text-center" }, "Promise"),
                      createVNode("p", { class: "para text-center mt-2 mb-5" }, " With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                class: "mx-auto mt-10",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      class: "mx-auto",
                      src: _imports_2,
                      width: "400"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        class: "mx-auto",
                        src: _imports_2,
                        width: "400"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "text-left",
                  cols: "12",
                  xxl: "6",
                  xl: "6",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode("h1", { class: "text-center" }, "Promise"),
                    createVNode("p", { class: "para text-center mt-2 mb-5" }, " With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. ")
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  class: "mx-auto mt-10",
                  cols: "12",
                  xxl: "6",
                  xl: "6",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      class: "mx-auto",
                      src: _imports_2,
                      width: "400"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, { class: "mx-auto ml-lg-10" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "text-left",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-center" }, "Promise"),
                  createVNode("p", { class: "para text-center mt-2 mb-5" }, " With White Water Media, transformation is as natural and powerful as the course of a river. Experience the magic as your brand not only grows but flourishes abundantl. ")
                ]),
                _: 1
              }),
              createVNode(VCol, {
                class: "mx-auto mt-10",
                cols: "12",
                xxl: "6",
                xl: "6",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    class: "mx-auto",
                    src: _imports_2,
                    width: "400"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div style="${ssrRenderStyle({ "background-color": "#0b0f26" })}" data-v-e65289e7>`);
  _push(ssrRenderComponent(VContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                class: "text-center",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>2023 White Water Media.</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "2023 White Water Media.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, {
                            class: "text-center",
                            cols: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>All rights reserved.</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "All rights reserved.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode("p", null, "2023 White Water Media.")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              class: "text-center",
                              cols: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "All rights reserved.")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode("p", null, "2023 White Water Media.")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            class: "text-center",
                            cols: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, "All rights reserved.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                class: "text-center",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VRow, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            class: "text-center",
                            cols: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>Privacy Policy</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "Privacy Policy")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-e65289e7${_scopeId5}>Terms of Service</p>`);
                              } else {
                                return [
                                  createVNode("p", null, "Terms of Service")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCol, {
                              class: "text-center",
                              cols: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, "Privacy Policy")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode("p", null, "Terms of Service")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            class: "text-center",
                            cols: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, "Privacy Policy")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode("p", null, "Terms of Service")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  class: "text-center",
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "2023 White Water Media.")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          class: "text-center",
                          cols: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, "All rights reserved.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  class: "text-center",
                  cols: "12",
                  lg: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          class: "text-center",
                          cols: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Privacy Policy")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "6" }, {
                          default: withCtx(() => [
                            createVNode("p", null, "Terms of Service")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              createVNode(VCol, {
                class: "text-center",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "2023 White Water Media.")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        class: "text-center",
                        cols: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, "All rights reserved.")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                class: "text-center",
                cols: "12",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        class: "text-center",
                        cols: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Privacy Policy")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "6" }, {
                        default: withCtx(() => [
                          createVNode("p", null, "Terms of Service")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e65289e7"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0;
  const _component_ScrollAnime = __nuxt_component_1;
  const _component_Aboutus = __nuxt_component_2;
  const _component_ServicesMain = __nuxt_component_3;
  const _component_Maestros = __nuxt_component_4;
  const _component_Collaborate = __nuxt_component_5;
  const _component_ConnectMain = __nuxt_component_6;
  const _component_FooterMain = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_ScrollAnime, null, null, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_Aboutus, null, null, _parent));
  _push(`<div id="services">`);
  _push(ssrRenderComponent(_component_ServicesMain, null, null, _parent));
  _push(`</div><div id="maestros">`);
  _push(ssrRenderComponent(_component_Maestros, null, null, _parent));
  _push(`</div><div id="collaborate">`);
  _push(ssrRenderComponent(_component_Collaborate, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ConnectMain, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterMain, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-15ac2415.mjs.map
