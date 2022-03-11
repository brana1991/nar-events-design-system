const buttons = {
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {},
      // 2. We can add a new button size or extend existing
      sizes: {
        base: {
          h: "56px",
          fontSize: "lg",
          px: "3",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        primary: {
          bg: "yellow.400",
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
      defaultProps: {
        size: "base",
        variant: "primary",
      },
    },
  },
};

export default buttons;
