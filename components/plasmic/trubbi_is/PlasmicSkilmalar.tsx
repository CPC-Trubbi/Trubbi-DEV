// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: viWxjihD78B5cQSNFM9rw3
// Component: c-9fUcXXRI
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: --ZfzNn8OC/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_trubbi_is.module.css"; // plasmic-import: viWxjihD78B5cQSNFM9rw3/projectcss
import * as sty from "./PlasmicSkilmalar.module.css"; // plasmic-import: c-9fUcXXRI/css

export type PlasmicSkilmalar__VariantMembers = {};

export type PlasmicSkilmalar__VariantsArgs = {};
type VariantPropType = keyof PlasmicSkilmalar__VariantsArgs;
export const PlasmicSkilmalar__VariantProps = new Array<VariantPropType>();

export type PlasmicSkilmalar__ArgsType = {};
type ArgPropType = keyof PlasmicSkilmalar__ArgsType;
export const PlasmicSkilmalar__ArgProps = new Array<ArgPropType>();

export type PlasmicSkilmalar__OverridesType = {
  root?: p.Flex<"div">;
  pageLayout?: p.Flex<typeof PageLayout>;
  freeBox?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
};

export interface DefaultSkilmalarProps {
  dataFetches: PlasmicSkilmalar__Fetches;
}

function PlasmicSkilmalar__RenderFunc(props: {
  variants: PlasmicSkilmalar__VariantsArgs;
  args: PlasmicSkilmalar__ArgsType;
  overrides: PlasmicSkilmalar__OverridesType;
  dataFetches?: PlasmicSkilmalar__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Viðskiptaskilmálar"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"Viðskiptaskilmálar"}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
            pageContent={
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox
                )}
              >
                <h4
                  data-plasmic-name={"h4"}
                  data-plasmic-override={overrides.h4}
                  className={classNames(
                    defaultcss.h4,
                    projectcss.h4,
                    defaultcss.__wab_text,
                    sty.h4
                  )}
                >
                  {"Þjónustuskilmálar"}
                </h4>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__mjyso
                  )}
                >
                  {
                    "Trúbbi býður upp á þjónustu á tónlistarupplifun fyrir einstaklinga og fyrirtæki. Eftirfarandi skilmálar gilda um sölu á þjónustu Trúbba til viðskiptavina. Með skilmálum okkar drögum við úr hættunni á að misskilningur eða mistök eigi sér stað. Skilmálarnir eru staðfestir með staðfestingu á tilboði sem við sendum viðskiptavinum."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__gwMhg
                  )}
                >
                  {"Seljandi"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p___4HYpx
                  )}
                >
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                  >
                    <React.Fragment>{"Trúbbi ehf.\n"}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Kt:"}
                    </span>
                    <React.Fragment>{" 471021-0670\n"}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Sími"}
                    </span>
                    <React.Fragment>{": 454-8660 \n"}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Netfang:"}
                    </span>
                    <React.Fragment>{" trubbi@trubbi.is "}</React.Fragment>
                  </span>
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__dw8Rr
                  )}
                >
                  {"Kaupandi"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__ctr7F
                  )}
                >
                  {
                    "Kaupandi er sá aðili sem skráður er sem greiðandi á reikning. Að gefnu tilefni viljum við ávíta að greiðandi verður að vera fjárráða s.s. 18 ára eða eldri. "
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__oIIy
                  )}
                >
                  {"Tengiliður bókunar"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__ubWhX
                  )}
                >
                  {
                    "Sá aðili sem útfyllir bókun á www.trubbi.is er um leið skráður fyrir bókuninni. Þessi aðili þarf að vera til taks varðandi bókun á þjónustu. Dæmi: Brúðhjón, starfsmannastjóri eða framkvæmdastjóri."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__rxBTy
                  )}
                >
                  {"Persónuvernd"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__kjtWu
                  )}
                >
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                  >
                    <React.Fragment>
                      {
                        "Seljandi (Trúbbi) fer með allar upplýsingar sem trúnaðarmál og þá eru þær einungis nýttar í viðskiptum milli Trúbba og kaupanda. Upplýsingarnar sem Trúbbi fær frá sínum viðskiptavinum eru ekki afhentar þriðja aðila undir neinum kringumstæðum. Tölvupóstur persónuverndarmála er "
                      }
                    </React.Fragment>
                    <p.PlasmicLink
                      className={classNames(
                        defaultcss.a,
                        projectcss.a,
                        defaultcss.__wab_text,
                        defaultcss.plasmic_default__inline,
                        sty.link___972Hx
                      )}
                      component={Link}
                      href={"mailto:personuvernd@trubbi.is" as const}
                      platform={"nextjs"}
                    >
                      {"personuvernd@trubbi.is"}
                    </p.PlasmicLink>
                    <React.Fragment>
                      {". Sjá persónuverndaryfirlýsingu í heild sinni "}
                    </React.Fragment>
                    <p.PlasmicLink
                      className={classNames(
                        defaultcss.a,
                        projectcss.a,
                        defaultcss.__wab_text,
                        defaultcss.plasmic_default__inline,
                        sty.link__dI3Wi
                      )}
                      component={Link}
                      href={"/personuverndastefna" as const}
                      platform={"nextjs"}
                    >
                      {"hér"}
                    </p.PlasmicLink>
                    <React.Fragment>{"."}</React.Fragment>
                  </span>
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__l20Wk
                  )}
                >
                  {"Öryggi"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__ml9Un
                  )}
                >
                  {
                    "Það er 100% öruggt að versla við Trúbba. Allar greiðslur fara í gegnum öruggt ferli í heimabanka kaupanda og greiðsluupplýsingar eru ekki veittar þriðja aðila undir neinum kringumstæðum."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__aarHl
                  )}
                >
                  {"Bókanir og greiðslur"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__mLjQ
                  )}
                >
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                  >
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Bókun – svar - staðfesting - greiðsla"}
                    </span>
                    <React.Fragment>
                      {
                        "\nBókanir fara í gegnum tölvupóst. Í kjölfar bókunar sem Trúbbi móttekur sendir Trúbbi frá sér tilboð. Sé tilboðið samþykkt fær kaupandi sendan greiðsluseðil sem birtist í heimabanka kaupanda. Greiðsluseðilinn skal greiða innan sólarhrings frá útgáfu hans. Bókun telst ekki fullkláruð fyrr en greiðsla hefur borist til Trúbba. Engar áhyggjur, við tökum tímann þinn frá í þennan sólarhring svo aðrir geti ekki bókað hann á meðan."
                      }
                    </React.Fragment>
                  </span>
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__jvScI
                  )}
                >
                  {"Afbókunarskilmálar"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p___7ITe0
                  )}
                >
                  {
                    "Vegna eðli þjónustunnar áskilur Trúbbi sér þeim rétti að vera með afbókunargjald vegna þjónustu sinnar. Ákveði kaupandi af einhverjum ástæðum að hætta við áður en þjónustan er unnin af hendi þá eru þeim málum háttað eins og tekið er fram í afbókunarskilmálunum hér fyrir neðan. Afbókunarskilmálar okkar eru til þess að tryggja að bókanir sem okkur berast séu á réttum rökum byggðar og í þeim tilgangi að við getum mannað gigg sem þörf er á og haldið spilaáætlun okkar eins og hún er. Ef svo ólíklega kæmi til að Trúbbi neyðist til að afbóka vegna veikinda og að ekki náðist tónlistarmaður til að fylla í skarðið þá endurgreiðum við að sjálfsögðu að fullu. Við biðjum að auki um biðlund í þessum málum vegna eðli þjónustunnar. Afbókunarskilmálar eru sem segir:\n\nAfbókun 7 dögum fyrir: 80% endurgreiðsla\nAfbókun 3-6 dögum fyrir: 60% endurgreiðsla\nAfbókun 1-2 dögum fyrir: 40% endurgreiðsla\nAfbókun 24 klst eða minna fyrir: 20% endurgreiðsla"
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__ofFzd
                  )}
                >
                  {"Breyta dagsetningu á bókun"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__unnci
                  )}
                >
                  {
                    "Ef þörf er á því að breyta dagsetningu á bókun hafðu þá samband við okkur eins fljótt og unnt er. Við munum reyna okkar besta en getum ekki lofað að það sé hægt. Ef ekki er hægt að finna nýja dagsetningu gilda hins vegar afbókunarskilmálar."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__ue4Ro
                  )}
                >
                  {"Verð og verðbreytingar"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__lkXDs
                  )}
                >
                  {
                    "Öll verð sem fylgja tilboðum eru gefin upp í íslenskum krónum (ISK) án VSK þar sem að þjónusta þessi er ekki VSK skyld. Verð sem fylgja tilboðum til viðskiptavina í tölvupósti eru gefin með fyrirvara um innsláttarvillu og áskilur Trúbbi sér rétt til að ljúka ekki viðskiptum hafi rangt verð verið gefið upp."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__nUzvm
                  )}
                >
                  {"Ógreiddir reikningar"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p___5JmO
                  )}
                >
                  {
                    "Ef reikningar eru ekki greiddir innan sólarhrings eftir að tilboð er samþykkt fellur pöntunin úr gildi. Þú getur alltaf prófað að bóka aftur hinsvegar."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__lF09N
                  )}
                >
                  {"Eðli tiltekins viðburðar"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__o2ISi
                  )}
                >
                  {
                    "Enginn viðburður er eins og því er mikilvægt að taka skýrt fram hverju er verið að óska eftir þjónustu okkar í. Til dæmis þá er ekki í lagi að bóka venjulegt trúbb í partý eða starfsmannagleði frá okkur og síðan kemur trúbbinn á svæðið og þarf að spila í brúðkaupsveislu eða athöfn. Það felur í sér allt annan undirbúning og öðruvísi klæðaburð."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__ljqwO
                  )}
                >
                  {"Staðsetning"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__nQgKx
                  )}
                >
                  {
                    "Ef staðsetning viðburðar er utan höfuðborgarsvæðis og bókun þess eðlis að hún krefst ferðaáætlunar s.s. gistingar og uppihalds bætist sá kostnaður við tilboðið frá Trúbba."
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p___8CwYo
                  )}
                >
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                  >
                    <React.Fragment>
                      {
                        "Vantar þig frekari upplýsingar, ekkert mál. Hafðu samband við okkur í síma "
                      }
                    </React.Fragment>
                    <p.PlasmicLink
                      className={classNames(
                        defaultcss.a,
                        projectcss.a,
                        defaultcss.__wab_text,
                        defaultcss.plasmic_default__inline,
                        sty.link__gWk55
                      )}
                      component={Link}
                      href={"tel:4548660" as const}
                      platform={"nextjs"}
                    >
                      {"454-8660"}
                    </p.PlasmicLink>
                    <React.Fragment>{", sendu okkur póst á "}</React.Fragment>
                    <p.PlasmicLink
                      className={classNames(
                        defaultcss.a,
                        projectcss.a,
                        defaultcss.__wab_text,
                        defaultcss.plasmic_default__inline,
                        sty.link__dxOXp
                      )}
                      component={Link}
                      href={"mailto:trubbi@trubbi.is" as const}
                      platform={"nextjs"}
                    >
                      {"trubbi@trubbi"}
                    </p.PlasmicLink>
                    <React.Fragment>
                      {".is eða bara á Facebook."}
                    </React.Fragment>
                  </span>
                </p>
              </div>
            }
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "freeBox", "h4"],
  pageLayout: ["pageLayout", "freeBox", "h4"],
  freeBox: ["freeBox", "h4"],
  h4: ["h4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  freeBox: "div";
  h4: "h4";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSkilmalar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSkilmalar__VariantsArgs;
    args?: PlasmicSkilmalar__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSkilmalar__Fetches;
  } & Omit<PlasmicSkilmalar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSkilmalar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSkilmalar__ArgProps,
      internalVariantPropNames: PlasmicSkilmalar__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSkilmalar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSkilmalar";
  } else {
    func.displayName = `PlasmicSkilmalar.${nodeName}`;
  }
  return func;
}

export const PlasmicSkilmalar = Object.assign(
  // Top-level PlasmicSkilmalar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),

    // Metadata about props expected for PlasmicSkilmalar
    internalVariantProps: PlasmicSkilmalar__VariantProps,
    internalArgProps: PlasmicSkilmalar__ArgProps
  }
);

export default PlasmicSkilmalar;
/* prettier-ignore-end */
