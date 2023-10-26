import {StoryFn} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
)