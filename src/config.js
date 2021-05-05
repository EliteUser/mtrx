export const AppScreen = {
  ENTRY: 'entry',
  EDITOR: 'editor'
};

export const EditorTab = {
  PRESETS: 'presets',
  MTRX: 'mtrx',
  FILTERS: 'filters'
};

export const filterConfig = {
  'contrast': {
    defaultValue: 1,
    min: 0,
    max: 2,
    step: 0.05,
    twoSided: true
  },
  'opacity': {
    defaultValue: 1,
    min: 0,
    max: 1,
    step: 0.01,
    twoSided: false
  },
  'brightness': {
    defaultValue: 1,
    min: 0,
    max: 2,
    step: 0.01,
    twoSided: true
  }
};

export const defaultFilterValues = Object.entries(filterConfig)
  .reduce((acc, el) => Object.assign(acc, {[el[0]]: el[1].defaultValue}), {});
