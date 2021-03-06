// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rBD4CX5iFvw16N7NCtmPxN
// Component: NgV2KaUj4f2yQH
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import Header2 from "../../Header2"; // plasmic-import: XCR71B54fwo-56/component
import Button from "../../Button"; // plasmic-import: JNodnEnTGQAka/component
import HeroSection from "../../HeroSection"; // plasmic-import: 3xXXcIoxHrOO3r/component
import Footer from "../../Footer"; // plasmic-import: NCI1iWII_oli-t/component

import { useScreenVariants as useScreenVariantszgxH2EbNbRmAnc } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZgxH2EbNbRmANC/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: rBD4CX5iFvw16N7NCtmPxN/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: NgV2KaUj4f2yQH/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: zQ3CsLosx1IDD2/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: jGbf9Jaizn-SDR/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Bb_Dfi0srlrDaY/icon

export type PlasmicAboutUs__VariantMembers = {};

export type PlasmicAboutUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutUs__VariantsArgs;
export const PlasmicAboutUs__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutUs__ArgsType = {};
type ArgPropType = keyof PlasmicAboutUs__ArgsType;
export const PlasmicAboutUs__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutUs__OverridesType = {
  root?: p.Flex<"div">;
  header2?: p.Flex<typeof Header2>;
  pageBanner?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  features?: p.Flex<"section">;
  container4?: p.Flex<"div">;
  outerRow2?: p.Flex<"div">;
  row2?: p.Flex<"div">;
  container5?: p.Flex<"div">;
  outerRow3?: p.Flex<"div">;
  row4?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  container6?: p.Flex<"div">;
  outerRow4?: p.Flex<"div">;
  row3?: p.Flex<"div">;
  heroSection?: p.Flex<typeof HeroSection>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultAboutUsProps {}

function PlasmicAboutUs__RenderFunc(props: {
  variants: PlasmicAboutUs__VariantsArgs;
  args: PlasmicAboutUs__ArgsType;
  overrides: PlasmicAboutUs__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszgxH2EbNbRmAnc()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__dof2C)}>
            <Header2
              data-plasmic-name={"header2"}
              data-plasmic-override={overrides.header2}
              className={classNames("__wab_instance", sty.header2)}
            />
          </div>

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___7JA7G)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__yOlLl)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__l9PFf)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"About us"}
                    </h1>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__de6AI
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column___9SCxQ)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__n91Ko)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/saa_s_website/images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg",
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </p.Stack>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___1IBw)}>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div className={classNames(projectcss.all, sty.column__utx1G)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___19B2Q
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "WHY CHOOSE US"
                      : "WHY CHOOSE US"}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yyd8K
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    }
                  </div>

                  <div
                    data-plasmic-name={"container4"}
                    data-plasmic-override={overrides.container4}
                    className={classNames(projectcss.all, sty.container4)}
                  >
                    <div
                      data-plasmic-name={"outerRow2"}
                      data-plasmic-override={overrides.outerRow2}
                      className={classNames(projectcss.all, sty.outerRow2)}
                    >
                      <div
                        data-plasmic-name={"row2"}
                        data-plasmic-override={overrides.row2}
                        className={classNames(projectcss.all, sty.row2)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__pxTmh
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__wym1L
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__dbLav
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__tfSjz
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Some value proposition of your service."
                                  : "Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___6VJk3
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__ibj68
                                )}
                                color={"blue" as const}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__aSh5P
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded" as const}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__w102R
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__aVoq)}
                            displayHeight={"400px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"400px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: "/plasmic/saa_s_website/images/brookeCagleWhwyBmtn30Unsplashjpg.jpeg",
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"container5"}
                    data-plasmic-override={overrides.container5}
                    className={classNames(projectcss.all, sty.container5)}
                  >
                    {true ? (
                      <div
                        data-plasmic-name={"outerRow3"}
                        data-plasmic-override={overrides.outerRow3}
                        className={classNames(projectcss.all, sty.outerRow3)}
                      >
                        <div
                          data-plasmic-name={"row4"}
                          data-plasmic-override={overrides.row4}
                          className={classNames(projectcss.all, sty.row4)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column___12Vw0
                            )}
                          >
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__khXV)}
                              displayHeight={"auto" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? ("100%" as const)
                                  : ("100%" as const)
                              }
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"auto" as const}
                              loading={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? ("lazy" as const)
                                  : ("lazy" as const)
                              }
                              src={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? {
                                      src: "/plasmic/saa_s_website/images/about2Jpg.jpeg",
                                      fullWidth: 570,
                                      fullHeight: 650,
                                      aspectRatio: undefined
                                    }
                                  : {
                                      src: "/plasmic/saa_s_website/images/about2Jpg.jpeg",
                                      fullWidth: 570,
                                      fullHeight: 650,
                                      aspectRatio: undefined
                                    }
                              }
                            />
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__xV8C3
                            )}
                          >
                            <h2
                              className={classNames(
                                projectcss.all,
                                projectcss.h2,
                                projectcss.__wab_text,
                                sty.h2__yfXz
                              )}
                            >
                              {hasVariant(
                                globalVariants,
                                "screen",
                                "mobileOnly"
                              )
                                ? "We Execute Our Ideas \nThe Start To Finish."
                                : "We Execute Our Ideas \nThe Start To Finish."}
                            </h2>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___2YrD
                              )}
                            >
                              {
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                              }
                            </div>

                            <p.Stack
                              as={p.PlasmicLink}
                              data-plasmic-name={"link"}
                              data-plasmic-override={overrides.link}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link
                              )}
                              component={Link}
                              platform={"nextjs"}
                            >
                              {false ? (
                                <IconIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__hqU7P
                                  )}
                                  role={"img"}
                                />
                              ) : null}

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__atNdw
                                )}
                              >
                                {"LEARN More"}
                              </div>

                              {false ? (
                                <IconIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__aWv2O
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                            </p.Stack>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div
                    data-plasmic-name={"container6"}
                    data-plasmic-override={overrides.container6}
                    className={classNames(projectcss.all, sty.container6)}
                  >
                    <div
                      data-plasmic-name={"outerRow4"}
                      data-plasmic-override={overrides.outerRow4}
                      className={classNames(projectcss.all, sty.outerRow4)}
                    >
                      <div
                        data-plasmic-name={"row3"}
                        data-plasmic-override={overrides.row3}
                        className={classNames(projectcss.all, sty.row3)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column___1LOh
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__j5Sy)}
                            displayHeight={"400px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"400px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: "/plasmic/saa_s_website/images/reading9255891920Jpg.jpeg",
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__y08DA
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__jkFuj
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__dKoDr
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__u1Biv
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Some value proposition of your service."
                                  : "Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___8Avo0
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__mbMzz
                                )}
                                color={"blue" as const}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__oSFsE
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded" as const}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            <HeroSection
              data-plasmic-name={"heroSection"}
              data-plasmic-override={overrides.heroSection}
              className={classNames("__wab_instance", sty.heroSection)}
            />
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header2",
    "pageBanner",
    "columns",
    "h1",
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "link",
    "container6",
    "outerRow4",
    "row3",
    "heroSection",
    "footer"
  ],
  header2: ["header2"],
  pageBanner: ["pageBanner", "columns", "h1"],
  columns: ["columns", "h1"],
  h1: ["h1"],
  features: [
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "link",
    "container6",
    "outerRow4",
    "row3"
  ],
  container4: ["container4", "outerRow2", "row2"],
  outerRow2: ["outerRow2", "row2"],
  row2: ["row2"],
  container5: ["container5", "outerRow3", "row4", "link"],
  outerRow3: ["outerRow3", "row4", "link"],
  row4: ["row4", "link"],
  link: ["link"],
  container6: ["container6", "outerRow4", "row3"],
  outerRow4: ["outerRow4", "row3"],
  row3: ["row3"],
  heroSection: ["heroSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header2: typeof Header2;
  pageBanner: "div";
  columns: "div";
  h1: "h1";
  features: "section";
  container4: "div";
  outerRow2: "div";
  row2: "div";
  container5: "div";
  outerRow3: "div";
  row4: "div";
  link: "a";
  container6: "div";
  outerRow4: "div";
  row3: "div";
  heroSection: typeof HeroSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutUs__VariantsArgs;
    args?: PlasmicAboutUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAboutUs__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAboutUs__ArgProps,
      internalVariantPropNames: PlasmicAboutUs__VariantProps
    });

    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    features: makeNodeComponent("features"),
    container4: makeNodeComponent("container4"),
    outerRow2: makeNodeComponent("outerRow2"),
    row2: makeNodeComponent("row2"),
    container5: makeNodeComponent("container5"),
    outerRow3: makeNodeComponent("outerRow3"),
    row4: makeNodeComponent("row4"),
    link: makeNodeComponent("link"),
    container6: makeNodeComponent("container6"),
    outerRow4: makeNodeComponent("outerRow4"),
    row3: makeNodeComponent("row3"),
    heroSection: makeNodeComponent("heroSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */
