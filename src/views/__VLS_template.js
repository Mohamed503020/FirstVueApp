import FirsAp from "@/components/FirstCom.vue";
import SecCom from "@/components/SecComp.vue";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./AboutView.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'FirsAp', typeof __VLS_localComponents, "FirsAp", "FirsAp", "FirsAp"> &
__VLS_WithComponent<'FirsAp', typeof __VLS_localComponents, "FirsAp", "firsAp", "firs-Ap"> &
__VLS_WithComponent<'SecCom', typeof __VLS_localComponents, "SecCom", "secCom", "sec-com">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_components.FirsAp;
// @ts-ignore
[FirsAp,];
__VLS_components.FirsAp; __VLS_components.FirsAp; __VLS_components.firsAp; __VLS_components.firsAp; __VLS_components["firs-Ap"]; __VLS_components["firs-Ap"];
// @ts-ignore
[FirsAp, FirsAp,];
__VLS_components.SecCom; __VLS_components.SecCom; __VLS_components.secCom; __VLS_components.secCom; __VLS_components["sec-com"]; __VLS_components["sec-com"];
// @ts-ignore
[SecCom, SecCom,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("about"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("about"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["h1"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = ({} as 'FirsAp' extends keyof typeof __VLS_ctx ? { 'FirsAp': typeof __VLS_ctx.FirsAp; } : typeof __VLS_resolvedLocalAndGlobalComponents).FirsAp;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, name: ((__VLS_ctx.name)), }));
({} as { FirsAp: typeof __VLS_10; }).FirsAp;
const __VLS_12 = __VLS_11({ ...{}, name: ((__VLS_ctx.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, name: ((__VLS_ctx.name)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = ({} as 'FirsAp' extends keyof typeof __VLS_ctx ? { 'FirsAp': typeof __VLS_ctx.FirsAp; } : 'firsAp' extends keyof typeof __VLS_ctx ? { 'FirsAp': typeof __VLS_ctx.firsAp; } : 'firs-Ap' extends keyof typeof __VLS_ctx ? { 'FirsAp': (typeof __VLS_ctx)["firs-Ap"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).FirsAp;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, name: ((__VLS_ctx.name)), }));
({} as { FirsAp: typeof __VLS_15; }).FirsAp;
({} as { FirsAp: typeof __VLS_15; }).FirsAp;
const __VLS_17 = __VLS_16({ ...{}, name: ((__VLS_ctx.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, name: ((__VLS_ctx.name)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
const __VLS_20 = ({} as 'SecCom' extends keyof typeof __VLS_ctx ? { 'SecCom': typeof __VLS_ctx.SecCom; } : 'secCom' extends keyof typeof __VLS_ctx ? { 'SecCom': typeof __VLS_ctx.secCom; } : 'sec-com' extends keyof typeof __VLS_ctx ? { 'SecCom': (typeof __VLS_ctx)["sec-com"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).SecCom;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, name: ((__VLS_ctx.name)), }));
({} as { SecCom: typeof __VLS_20; }).SecCom;
({} as { SecCom: typeof __VLS_20; }).SecCom;
const __VLS_22 = __VLS_21({ ...{}, name: ((__VLS_ctx.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, name: ((__VLS_ctx.name)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["template"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_23.slots!).soltTitle;
{
const __VLS_28 = __VLS_intrinsicElements["h3"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
const __VLS_30 = __VLS_29({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
let __VLS_32!: __VLS_NormalizeEmits<typeof __VLS_31.emit>;
(__VLS_31.slots!).default;
}
// @ts-ignore
[name, name, name, name, name, name, name, name, name,];
}
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
