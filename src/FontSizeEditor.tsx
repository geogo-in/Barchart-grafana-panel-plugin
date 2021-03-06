import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Select, Field } from '@grafana/ui';

export const FontSizeEditor: React.FC<StandardEditorProps<any>> = (props) => {
  return (
    <div>
      <Field label="Select a font size for Bar Text">
        <Select
          value={props.value}
          options={[
            { label: '10', value: 10 },
            { label: '11', value: 11 },
            { label: '12', value: 12 },
            { label: '13', value: 13 },
            { label: '14', value: 14 },
            { label: '15', value: 15 },
            { label: '16', value: 16 },
            { label: '17', value: 17 },
            { label: '18', value: 18 },
            { label: '19', value: 19 },
            { label: '20', value: 20 },
          ]}
          onChange={(selectableValue) => {
            props.onChange(selectableValue);
          }}
        />
      </Field>
    </div>
  );
};
