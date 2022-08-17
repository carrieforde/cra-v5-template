import { Global } from "@emotion/react";
import React from "react";
import { theme } from "theme";

export const GlobalStyles = () => (
  <Global
    styles={{
      html: {
        fontSize: theme.htmlFontSize,
      },

      body: {
        backgroundColor: theme.palette.backgroundColor,
        color: theme.palette.textColor,
        fontFamily: theme.fonts.body,
        lineHeight: 1.75,
        wordWrap: "break-word",
      },

      "pre, code": {
        fontFamily: theme.fonts.monospace,
        fontSize: theme.fontSize(12),
      },

      "h1, h2, h3, h4, h5, h6": {
        color: theme.palette.default[800],
        fontWeight: 600,
        lineHeight: 1.1,
        marginBottom: theme.spacing(1),
        marginTop: 0,
      },

      "* + h1, * + h2, * + h3, * + h4, * + h5, * + h6": {
        marginTop: theme.spacing(4),
      },

      "p + p": {
        marginTop: theme.spacing(3),
      },

      "ol, ul": {
        fontSize: theme.fontSize(14),
      },

      "ol ol, ul ul": {
        marginTop: theme.spacing(1),
      },

      "ol ol": {
        listStyle: "lower-alpha",
      },

      "p + ol, p + ul": {
        marginTop: theme.spacing(2),
      },

      li: {
        marginBottom: 0,
      },

      "li + li, li > ol, li > ul": {
        marginTop: theme.spacing(1),
      },

      "ol ol ol": {
        listStyle: "lower-roman",
      },

      a: {
        background: `linear-gradient(
              to bottom,
              ${theme.palette.primary[50]} 50%,
              ${theme.palette.primary[50]} 50%
            )
            0 0.75em / 3px 0.5em repeat-x
            `,
        color: "inherit",
        textDecoration: "none",
        transition: "background 0.3s ease-in-out",
      },

      "a:hover, a:focus": {
        backgroundPosition: "0 100%",
        backgroundSize: "5px, 100%",
      },

      "a code": {
        borderBottom: `2px solid ${theme.palette.primary[700]}`,
      },

      blockquote: {
        color: theme.palette.default[800],
        margin: `${theme.spacing(4)} ${theme.spacing(3)}`,
        position: "relative",
      },

      "blockquote::before": {
        color: theme.palette.primary[50],
        content: "'\\0201C'",
        fontSize: theme.fontSize(192),
        left: "-35px",
        lineHeight: 1,
        position: "absolute",
        top: " -35px",
        zIndex: -1,
      },

      cite: {
        display: "block",
        fontSize: theme.fontSize(12),
        marginTop: theme.spacing(2),
      },

      "acronym[title]": {
        textDecoration: "none",
      },

      var: {
        fontStyle: "normal",
      },

      "sub, sup": {
        fontSize: theme.fontSize(12),
      },

      img: {
        marginBottom: theme.spacing(3),
      },

      ".anchor": {
        background: "none",
        left: "-20px",
        position: "absolute",
      },

      "@media screen and (min-width: 600px)": {
        "ol, ul": {
          fontSize: theme.fontSize(16),
        },
      },
    }}
  />
);
