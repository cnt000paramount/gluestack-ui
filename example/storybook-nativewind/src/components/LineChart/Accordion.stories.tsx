import type { ComponentMeta } from '@storybook/react-native';
import LineChart from './LineChart';

const AccordionMeta: ComponentMeta<typeof LineChart> = {
  title: 'stories/Line Chart',
  component: LineChart,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Actionsheet component presents a set of options to the user, overlaid on top of the app's content, allowing them to take quick actions without leaving the current page or view.`,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'unfilled'],
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
};

export default AccordionMeta;

export {
  LineChart,
  // AccordionCustomisedBackground,
  // AccordionRoundedCorners,
  // AccordionCustomisedComponent,
  // AccordionNested,
};
