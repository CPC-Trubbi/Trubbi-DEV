// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: viWxjihD78B5cQSNFM9rw3
// Component: mQG977DQnG
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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jGrjipsxZS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_trubbi_is.module.css"; // plasmic-import: viWxjihD78B5cQSNFM9rw3/projectcss
import * as sty from "./PlasmicPeronuverndastefna.module.css"; // plasmic-import: mQG977DQnG/css

export type PlasmicPeronuverndastefna__VariantMembers = {};

export type PlasmicPeronuverndastefna__VariantsArgs = {};
type VariantPropType = keyof PlasmicPeronuverndastefna__VariantsArgs;
export const PlasmicPeronuverndastefna__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPeronuverndastefna__ArgsType = {};
type ArgPropType = keyof PlasmicPeronuverndastefna__ArgsType;
export const PlasmicPeronuverndastefna__ArgProps = new Array<ArgPropType>();

export type PlasmicPeronuverndastefna__OverridesType = {
  root?: p.Flex<"div">;
  pageLayout?: p.Flex<typeof PageLayout>;
  freeBox?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  text?: p.Flex<"div">;
};

export interface DefaultPeronuverndastefnaProps {
  dataFetches: PlasmicPeronuverndastefna__Fetches;
}

function PlasmicPeronuverndastefna__RenderFunc(props: {
  variants: PlasmicPeronuverndastefna__VariantsArgs;
  args: PlasmicPeronuverndastefna__ArgsType;
  overrides: PlasmicPeronuverndastefna__OverridesType;
  dataFetches?: PlasmicPeronuverndastefna__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
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
                  {"Persónuverndaryfirlýsing Trúbba"}
                </h4>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__ug9Bb
                  )}
                >
                  {"Almennt"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__p1PoU
                  )}
                >
                  {
                    "Í þessari persónuverndaryfirlýsingu kemur fram hvernig við hjá Trúbba ehf förum með þær persónuupplýsingar sem við geymum um þig og hvaða réttindi þú átt varðandi upplýsingarnar. \n \nTrúbbi ehf gætir fyllsta trúnaðar og virðir þinn rétt varðandi meðferð þinna persónuupplýsinga. Persónuvernd þín er okkur mikilvæg og því viljum við að þú hafir allar upplýsingar um meðhöndlum okkar á persónuupplýsingum um þig. Persónuverndarstefna okkar nær til persónuupplýsinga hvort sem þeim er safnað og varðveittar á rafræna vegu, á pappír eða á annan máta. Persónuverndarstefna Trúbba ehf nær yfir skráningar, vörslu og vinnslu á þeim persónuupplýsingum sem falla þar undir. \n \nStefnan er aðgengileg á vefsíðunni www.trubbi.is. Við bendum þér á stefnuna þegar þú velur að samþykkja tilboð okkar og þú ert í kjölfarið beðin(n) um að staðfesta að þú hafir lesið hana. "
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__fpfd
                  )}
                >
                  {"Ábyrgðaraðili"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__exXz
                  )}
                >
                  {
                    "Trúbbi ehf, kt. 471021-0670 er ábyrgðaraðili fyrir allri meðhöndlun persónuupplýsinga sem fram fer í tengslum við þjónustu Trúbba ehf. "
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__bjaVa
                  )}
                >
                  {
                    "Hvers kyns upplýsingum söfnum við og hvernig söfnum við þeim upplýsingum? "
                  }
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__u1JVm
                  )}
                >
                  {
                    "Persónuupplýsingar eru þær upplýsingar um einstakling sem gera kleift að persónugreina hann, beint eða óbeint. Við notum persónuupplýsingar alla jafna í þeim tilgangi að veita þér bestu mögulegu þjónustu, upplýsa þig um tilboð og senda reikning sem og afrit. Við söfnum eftirfarandi persónuupplýsingum um þig:\n\nTengiliðaupplýsingar, s.s. nafn, kennitölu, tölvupóstfang og símanúmer. Þetta gerum við til þess að geta verið í samskiptum varðandi bókunarferli, sent þér afrit af reikning og til þess að geta sent þér tilkynningar (með tölvupósti eða SMS-skilaboðum) í tengslum við tilboð og/eða nýjungar á þjónustu okkar. Tengiliðaupplýsingum söfnum við frá þér í gegnum útfyllingarform á heimasíðu okkar þar sem fyrirspurnir eru sendar inn þar sem þú hefur m.a. veitt þær upplýsingar sjálfviljugur. \nGreiðsluupplýsingar höldum við ekki utan um, heldur notum við kennitölu kaupanda til þess að senda reikning í heimabanka hans. \n\nUpplýsingar um kaup á þjónustu, líkt og dagsetningu viðskipta, staðsetningu viðskipta og hvað var keypt. Þetta gerum við í þeim tilgangi að halda utan um viðskiptasögu þína og við uppgjör á þjónustu. Að auki eru upplýsingar þessar okkur nauðsynlegar vegna samningssambands við kaupanda og til að uppfylla skilyrði skatta- og bókhaldslaga. \n\nSamskiptasaga: felur í sér ef þú hefur samband við okkur, fyllir út fyrirspurn, óskar eftir upplýsingum, kemur á framfæri athugasemdum eða jafnvel sendir inn kvörtun eða beiðni, með tölvupósti eða síma. Símtölin gætu verið hljóðrituð en tölvupóstar og önnur rafræn samskipti sem fara í gegnum þjónustukerfið okkar eru geymd í allt að tvö ár. \n\nKynningarstarf á netinu: flokkast undir þegar við sendum þér kynningarefni með tölvupósti, hefðbundnum pósti eða SMS-skilaboðum s.s. kynningarefni, auglýsingar, kannanir, afsláttarmiða, tilboð og meðmæli með þjónustu, enda hefðir þú áður veitt samþykki fyrir slíkri notkun. Þetta kynningarstarf kann að vera byggt á þínum kaupsöguupplýsingum þannig að þú fáir upplýsingar og tilboð sem við teljum sniðin sérstaklega að þér.\n\nTæknileg gögn,. Þegar þú heimsækir heimasíðu okkar þá söfnum við sjálfkrafa gögnum sem fela í sér upplýsingar líkt og IP-tölu, tegund vafra, auðkenni tölvunnar og tölvukerfi. Þar að auki eru skráðar upplýsingar um að þú hafir heimsótt vefsíðu Trúbba í gegnum hlekk og þá af hvaða vefsíðu. Einnig söfnum við upplýsingum um hvernig þú notar vefsíðuna www.trubbi.is, hvaða tíma og dags heimsóknin á sér stað, hversu lengi þú varst á síðunni, auk upplýsinga um kaup á þjónustu. Áðurnefndum upplýsingum kann að vera safnað með notkun vefkaka (e. cookies). Nánar um upplýsingar um vefkökur má finna hér.\n"
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__l3U2
                  )}
                >
                  {"Tilgangur vinnslu okkar á persónuupplýsingum"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__ipwgL
                  )}
                >
                  {
                    "Við söfnum og geymum persónuupplýsingar um þig m.a. tl þess að:"
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__y6HV7
                  )}
                >
                  {"-geta veitt þér þá þjónustu sem þú óskar eftir. "}
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__qWwgj
                  )}
                >
                  {
                    "-svara fyrirspurnum þínum í gegnum tölvupóst eða síma og/eða bregðast við óskum og þörfum þínum. "
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p___66VoR
                  )}
                >
                  {
                    "-geta sent þér upplýsingar í tölvupósti eða í „sms“ um upplýsingar varðandi bókun, uppgjör eða tilboð á þjónustu, að því gefnu að þú samþykkir slíkt. "
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__rGcYg
                  )}
                >
                  {"-standa við samning okkar við þig þegar veitt er þjónusta."}
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__om1Vw
                  )}
                >
                  {
                    "-geta uppfyllt okkar skyldur samkvæmt lögum á borð við bókhaldslög, samkvæmt beiðnum frá yfirvöldum og opinberum stofnunum ásamt öðrum ákvæðum laga. "
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__o9EWu
                  )}
                >
                  {
                    "-gera þér kleift að deila efni á samfélagsmiðlum af vefsvæði okkar. "
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__dsD9D
                  )}
                >
                  {
                    "-geta átt í samskiptum varðandi kaup í gegnum heimasíðu okkar. "
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__hkIi
                  )}
                >
                  {
                    "-senda þér mikilvægar upplýsingar sem tengjast okkar þjónustu eins og upplýsingar um skilmálabreytingar og eða annað sem varðar okkar þjónustu gagnvart þér."
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__bvVau
                  )}
                >
                  {
                    "-geta greint gögn, búið til áætlanir og markaðsrannsóknir innan Trúbba og til þess að betrumbæta okkar þjónustu og aflað tölfræðilega upplýsinga í gæða- og markaðsstarfi okkar. "
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__dqILz
                  )}
                >
                  {
                    "-gera þér kleift að taka þátt í leikjum, keppnum, kynningarherferðum, könnunum eða öðrum kynningum á okkar vegum. Í einhverjum tilvikum kunna að vera viðbótarupplýsingar sem þú þarft að kynna þér sérstaklega og hvetjum við þig til að gera það. "
                  }
                </p>

                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text
                  )}
                >
                  {
                    "Óskað er eftir þínu samþykki á www.trubbi.is er þú heimsækir vefsíðuna. Einnig getur þú komið þínu samþykki á framfæri með því að senda okkur tölvupóst á personuvernd@trubbi.is. \nÞú getur alltaf afturkallað samþykki þitt hvenær sem þér hentar til að koma í veg fyrir að við sendum þér efni í markaðstengdum tilgangi í framtíðinni. Þú getur það með því að smella á tengil í tölvupósti sem þú hefur fengið frá okkur eða sent tölvupóst á personuvernd@trubbi.is. Í slíkri beiðni þarf að koma skýrt fram að þú viljir ekki fá sent frá okkur slíkt efni, framvegis. \nEkki er öruggt að afturköllun á samþykki taki tafarlaust gildi en við reynum að bregðast við þeirri beiðni eins fljótt og hægt er. Við tryggjum hins vegar að bætt verði úr því innan mánaðar frá beiðninni. Ef þú kýst að vilja ekki fá kynningar tengt efni frá Trúbba ehf, áskiljum við okkur rétt til að hafa samband við þig áfram og senda þér nauðsynlegar upplýsingar varðandi okkar þjónustu."
                  }
                </div>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__mbHyc
                  )}
                >
                  {"Öryggi persónuupplýsinga"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__sN02T
                  )}
                >
                  {
                    "Við vinnum eftir viðeigandi öryggisráðstöfunum með það að leiðarljósi að passa upp á að persónuupplýsingar þínar glatist, breytist, verði birtar í óleyfi eða að veittur verði aðgengi af þeim í leyfisleysi. Allur aðgangur að þínum upplýsingunum er einnig takmarkaður og einungis veittur sérstökum aðilum sem eru bundnir trúnaðar skuldbindingu. \nVið viljum vekja sérstaka athygli á því að aðilar bera eigin ábyrgð á persónuupplýsingum, t.d. nafni, aldri og mynd, sem þeir kjósa að deila á almennum vettvangi, líkt og í gegnum spjall eða Facebook síðu vefsíðu okkar. \nGagnaflutningur á netinu getur aldrei verið fullkomlega öruggur og því biðlum við til þín að láta okkur vita ef þú telur að ákveðnar persónuupplýsingar um þig sem þú hefur veitt okkur séu í einhvers konar hættu. \nEf öryggisbrestur verður á persónuupplýsingum um þig sem hafa áhrif á þig munum við tafarlaust láta Persónuvernd vita og eftir atvikum til þín eftir því sem lög segja til um. \nEf þú telur samskipti þín við okkur ekki örugg, biðlum við til þín að láta okkur tafarlaust vita með því að senda okkur tölvupóst á personuvernd@trubbi.is.\nVefsíðan www.trubbi.is er fyrir einstaklinga sem hafa náð að minnsta kosti 18 ára aldri vegna þess að kaupandi þarf að vera fjárráða. Þar með krefjumst við þess að einstaklingar yngri en 18 ára gefi ekki upp persónuupplýsingar í gegnum vefsíðu okkar."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__tw8R9
                  )}
                >
                  {"Hve lengi eru persónuupplýsingar geymdar?"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p___7JGpg
                  )}
                >
                  {
                    "Persónuupplýsingar geymum við einungis í þann tíma sem nauðsyn ber til í þeim tilgangi sem þeirra var aflað. Geymslutími slíkra persónuupplýsinga fer eftir eðli upplýsinganna og þeim lagareglum sem gilda um viðkomandi vinnslu persónuupplýsinga, t.d. skatta- eða bókhaldslöggjafar. Í einstaka tilvikum kann einnig að vera nauðsynlegt að geyma gögn vegna lögmætra hagsmuna , t.d. vegna deilumála."
                  }
                </p>

                <h5
                  className={classNames(
                    defaultcss.h5,
                    projectcss.h5,
                    defaultcss.__wab_text,
                    sty.h5__aUwXh
                  )}
                >
                  {"Réttur þinn"}
                </h5>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__gsNb2
                  )}
                >
                  {
                    "Í ákveðnum tilvikum átt þú réttindi samkvæmt persónuverndarlöggjöf í tengslum við meðhöndlun okkar á þínum persónuupplýsingum og biðjum við þig að hafa samband við okkur ef þess er óskað eftir. Við tryggjum að þeirri beiðni sé lokið innan 30 daga. Við gætum mögulega þurft að óska eftir viðbótarupplýsingum frá þér varðandi beiðni þína eins og vegna auðkenningar. \nEkki er gjaldtaka á afhendingu persónuupplýsinga en ef um er að ræða beiðnir sem eru að öllu tilhæfulausar, óhóflegar eða síendurteknar áskiljum við okkur rétt á synjun þeirra eða gjaldtöku við afhendingu."
                  }
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p___3Z1J
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
                      {"Réttur þinn af aðgangi á þínum upplýsingum:"}
                    </span>
                    <React.Fragment>
                      {
                        " Þú átt allan rétt á því að óska eftir aðgangi að þínum persónuupplýsingum og að fá afhent frá okkur afrit af þeim. Með þeim hætti getur þú fullvissað þig um að upplýsingarnar séu réttar og að vinnsla okkar á þeim sé í samræmi við lög. \n\n"
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Réttur til að fá leiðrétt:"}
                    </span>
                    <React.Fragment>
                      {
                        " Ef einhverjar upplýsingar hjá okkur er varða þig eru rangar eða jafnvel ónákvæmar átt þú vitaskuld rétt á að fá okkur til að leiðrétta þær. \n\n"
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Réttur til að eyða:"}
                    </span>
                    <React.Fragment>
                      {
                        " Í ákveðnum tilfellum getur þú átt rétt á að við eyðum þeim persónuupplýsingum sem við höfum um þig. Þetta á aðallega við þegar þær upplýsingarnar eru ekki nauðsynlegar lengur, ef þú hefur andmælt meðhöndlun upplýsinganna, ef meðhöndlun reynist ólögmæt, eða ef meðhöndlunin er byggð á samþykki þínu sem þú hefur afturkallað. Við áskiljum okkur hins vegar þann rétt til að meta einstaka tilfelli fyrir sig og hvort skylt sé að eyða gögnum. \n\n"
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Réttur til að andmæla meðhöndlun:"}
                    </span>
                    <React.Fragment>
                      {
                        " Ef meðhöndlun er byggð á almannahagsmunum, lögmætum hagsmunum Trúbba eða annarra og að þú telur að meðhöndlun upplýsinganna þinna brjóti gegn grundvallarréttindum þínum vegna aðstæðna þinna, getur þú andmælt vinnslunni. Ef þú andmælir, hættum við meðhöndlun þinna gagna nema við getum bent á ríkari lögmæta hagsmuni af að halda henni áfram.\n\n"
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Réttur til takmörkunar á meðhöndlun:"}
                    </span>
                    <React.Fragment>
                      {
                        " Í neðangreindum tilfellum átt þú rétt á að við stöðvum meðhöndlun á þínum persónuupplýsingum: Ef þú vefengir að persónuupplýsingarnar þínar séu á réttum rökum byggðar (þangað til við getum staðfest að þær séu réttar), Meðhöndlunin er ólögmæt, en þú óskar þess ekki að persónuupplýsingunum þínum sé eytt, Við höfum ekki lengur not fyrir þínar persónuupplýsingunum en þú þarfnast þeirra til þess að stofna, hafa uppi eða verja þínar réttarkröfur, Þú hefur andmælt meðhöndlun þinna persónuupplýsinga, sbr. að ofan. Í þeim tilfellum stöðvum við meðhöndlun ef við höfum ekki bent þér á ríkari lögmæta hagsmuni okkar af því að halda henni áfram. \n\n"
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Réttur til að afturkalla samþykki:"}
                    </span>
                    <React.Fragment>
                      {
                        " Þegar við byggjum meðhöndlun persónuupplýsinga á þínu samþykki er þér heimilt að afturkalla samþykkið. Afturköllun þýðir hins vegar ekki að meðhöndlun sem áður fór fram áður en samþykki var afturkallað hafi verið ólögmæt. \nEf þú vilt nýta ofangreindan rétt sendu okkur tölvupóst á personuvernd@trubbi.is.\n\n"
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Persónuverndarfulltrúi "}
                    </span>
                    <React.Fragment>
                      {
                        "\nEf vakna hjá þér einhverjar spurningar, athugasemdir, eða kvartanir varðandi þessa persónuverndaryfirlýsingu eða meðferð okkar á persónuupplýsingum bendum við þér á að hafa samband við persónuverndarfulltrúa okkar á netfangið: personuvernd@trubbi.is.\nEf þú telur þig ekki fá þá úrlausn sem þú óskaðir eftir hjá persónuverndarfulltrúa þá er hægt að senda inn kvörtun til Persónuverndar \n\n"
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Breytingar "}
                    </span>
                    <React.Fragment>
                      {
                        "\nPersónuverndaryfirlýsing þessi var rituð 1. júlí 2021. \nVið bendum á að yfirlýsing þessi er ávallt í stöðugri skoðun og því getur henni verið breytt. Ef svo kemur til að þá munum við birta allar þær breytingar á vefsíðu okkar: www.trubbi.is.\nMeð sama hætti er okkur mikilvægt að upplýsingar um þig séu ávallt sem réttastar. Því biðlum við kurteisislega til þín um láta okkur vita af breytingum á tengiliðaupplýsingum þínar líkt og símanúmer þitt, netfang og ef aðrar upplýsingar breytast.\n"
                      }
                    </React.Fragment>
                  </span>
                </p>

                <p
                  className={classNames(
                    defaultcss.p,
                    projectcss.p,
                    defaultcss.__wab_text,
                    sty.p__teWio
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
                        sty.link__ftFF
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
                        sty.link__sk6Fc
                      )}
                      component={Link}
                      href={"mailto:trubbi@trubbi.is" as const}
                      platform={"nextjs"}
                    >
                      {"personuvernd@trubbi"}
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
  root: ["root", "pageLayout", "freeBox", "h4", "text"],
  pageLayout: ["pageLayout", "freeBox", "h4", "text"],
  freeBox: ["freeBox", "h4", "text"],
  h4: ["h4"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  freeBox: "div";
  h4: "h4";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPeronuverndastefna__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPeronuverndastefna__VariantsArgs;
    args?: PlasmicPeronuverndastefna__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPeronuverndastefna__Fetches;
  } & Omit<PlasmicPeronuverndastefna__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPeronuverndastefna__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPeronuverndastefna__ArgProps,
      internalVariantPropNames: PlasmicPeronuverndastefna__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPeronuverndastefna__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPeronuverndastefna";
  } else {
    func.displayName = `PlasmicPeronuverndastefna.${nodeName}`;
  }
  return func;
}

export const PlasmicPeronuverndastefna = Object.assign(
  // Top-level PlasmicPeronuverndastefna renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicPeronuverndastefna
    internalVariantProps: PlasmicPeronuverndastefna__VariantProps,
    internalArgProps: PlasmicPeronuverndastefna__ArgProps
  }
);

export default PlasmicPeronuverndastefna;
/* prettier-ignore-end */
