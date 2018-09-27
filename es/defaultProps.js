var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classnames from 'classnames';
//
import _ from './utils';
import Pagination from './pagination';

var emptyObj = function emptyObj() {
  return {};
};

export default {
  // General
  data: [],
  resolveData: function resolveData(data) {
    return data;
  },
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPage: 0,
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  multiSort: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  // eslint-disable-next-line no-unused-vars
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  },
  // eslint-disable-next-line no-unused-vars
  defaultSortMethod: function defaultSortMethod(a, b, desc) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },

  // Classes
  className: '',
  style: {},

  // Component decorators
  getProps: emptyObj,
  getTableProps: emptyObj,
  getTheadGroupProps: emptyObj,
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrGroupProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: emptyObj,
  getPaginationProps: emptyObj,
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 100,
    minResizeWidth: 11,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35
  },

  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',

  // Components
  TableComponent: function TableComponent(_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return React.createElement(
      'div',
      _extends({
        className: classnames('rt-table', className),
        role: 'grid'
        // tabIndex='0'
      }, rest),
      children
    );
  },
  TheadComponent: _.makeTemplateComponent('rt-thead', 'Thead'),
  TbodyComponent: _.makeTemplateComponent('rt-tbody', 'Tbody'),
  TrGroupComponent: function TrGroupComponent(_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        rest = _objectWithoutProperties(_ref2, ['children', 'className']);

    return React.createElement(
      'div',
      _extends({ className: classnames('rt-tr-group', className), role: 'rowgroup' }, rest),
      children
    );
  },
  TrComponent: function TrComponent(_ref3) {
    var children = _ref3.children,
        className = _ref3.className,
        rest = _objectWithoutProperties(_ref3, ['children', 'className']);

    return React.createElement(
      'div',
      _extends({ className: classnames('rt-tr', className), role: 'row' }, rest),
      children
    );
  },
  ThComponent: function ThComponent(_ref4) {
    var toggleSort = _ref4.toggleSort,
        className = _ref4.className,
        children = _ref4.children,
        rest = _objectWithoutProperties(_ref4, ['toggleSort', 'className', 'children']);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      React.createElement(
        'div',
        _extends({
          className: classnames('rt-th', className),
          onClick: function onClick(e) {
            return toggleSort && toggleSort(e);
          },
          role: 'columnheader',
          tabIndex: '-1' // Resolves eslint issues without implementing keyboard navigation incorrectly
        }, rest),
        children
      )
    );
  },
  TdComponent: function TdComponent(_ref5) {
    var toggleSort = _ref5.toggleSort,
        className = _ref5.className,
        children = _ref5.children,
        rest = _objectWithoutProperties(_ref5, ['toggleSort', 'className', 'children']);

    return React.createElement(
      'div',
      _extends({ className: classnames('rt-td', className), role: 'gridcell' }, rest),
      children
    );
  },
  TfootComponent: _.makeTemplateComponent('rt-tfoot', 'Tfoot'),
  FilterComponent: function FilterComponent(_ref6) {
    var filter = _ref6.filter,
        _onChange = _ref6.onChange;
    return React.createElement('input', {
      type: 'text',
      style: {
        width: '100%'
      },
      value: filter ? filter.value : '',
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      }
    });
  },
  ExpanderComponent: function ExpanderComponent(_ref7) {
    var isExpanded = _ref7.isExpanded;
    return React.createElement(
      'div',
      { className: classnames('rt-expander', isExpanded && '-open') },
      '\u2022'
    );
  },
  PivotValueComponent: function PivotValueComponent(_ref8) {
    var subRows = _ref8.subRows,
        value = _ref8.value;
    return React.createElement(
      'span',
      null,
      value,
      ' ',
      subRows && '(' + subRows.length + ')'
    );
  },
  AggregatedComponent: function AggregatedComponent(_ref9) {
    var subRows = _ref9.subRows,
        column = _ref9.column;

    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        React.createElement(
          'span',
          { key: i },
          row[column.id],
          i < subRows.length - 1 ? ', ' : ''
        )
      );
    });
    return React.createElement(
      'span',
      null,
      previewValues
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: Pagination,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: function LoadingComponent(_ref10) {
    var className = _ref10.className,
        loading = _ref10.loading,
        loadingText = _ref10.loadingText,
        rest = _objectWithoutProperties(_ref10, ['className', 'loading', 'loadingText']);

    return React.createElement(
      'div',
      _extends({ className: classnames('-loading', { '-active': loading }, className) }, rest),
      React.createElement(
        'div',
        { className: '-loading-inner' },
        loadingText
      )
    );
  },
  NoDataComponent: _.makeTemplateComponent('rt-noData', 'NoData'),
  ResizerComponent: _.makeTemplateComponent('rt-resizer', 'Resizer'),
  PadRowComponent: function PadRowComponent() {
    return React.createElement(
      'span',
      null,
      '\xA0'
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0UHJvcHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc25hbWVzIiwiXyIsIlBhZ2luYXRpb24iLCJlbXB0eU9iaiIsImRhdGEiLCJyZXNvbHZlRGF0YSIsImxvYWRpbmciLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJzaG93UGFnZVNpemVPcHRpb25zIiwicGFnZVNpemVPcHRpb25zIiwiZGVmYXVsdFBhZ2UiLCJkZWZhdWx0UGFnZVNpemUiLCJzaG93UGFnZUp1bXAiLCJjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSIsImNvbGxhcHNlT25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPbkRhdGFDaGFuZ2UiLCJmcmVlemVXaGVuRXhwYW5kZWQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJkZWZhdWx0U29ydERlc2MiLCJkZWZhdWx0U29ydGVkIiwiZGVmYXVsdEZpbHRlcmVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJkZWZhdWx0RmlsdGVyTWV0aG9kIiwiZmlsdGVyIiwicm93IiwiY29sdW1uIiwiaWQiLCJwaXZvdElkIiwidW5kZWZpbmVkIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInZhbHVlIiwiZGVmYXVsdFNvcnRNZXRob2QiLCJhIiwiYiIsImRlc2MiLCJ0b0xvd2VyQ2FzZSIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsInBpdm90VmFsS2V5IiwicGl2b3RJREtleSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5IiwibmVzdGluZ0xldmVsS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsIkNlbGwiLCJIZWFkZXIiLCJGb290ZXIiLCJBZ2dyZWdhdGVkIiwiUGl2b3QiLCJQaXZvdFZhbHVlIiwiRXhwYW5kZXIiLCJGaWx0ZXIiLCJzaG93IiwibWluV2lkdGgiLCJtaW5SZXNpemVXaWR0aCIsImFnZ3JlZ2F0ZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiZ2V0SGVhZGVyUHJvcHMiLCJmb290ZXJDbGFzc05hbWUiLCJmb290ZXJTdHlsZSIsImdldEZvb3RlclByb3BzIiwiZmlsdGVyTWV0aG9kIiwiZmlsdGVyQWxsIiwic29ydE1ldGhvZCIsImV4cGFuZGVyRGVmYXVsdHMiLCJ3aWR0aCIsInBpdm90RGVmYXVsdHMiLCJwcmV2aW91c1RleHQiLCJuZXh0VGV4dCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInBhZ2VUZXh0Iiwib2ZUZXh0Iiwicm93c1RleHQiLCJUYWJsZUNvbXBvbmVudCIsImNoaWxkcmVuIiwicmVzdCIsIlRoZWFkQ29tcG9uZW50IiwibWFrZVRlbXBsYXRlQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckdyb3VwQ29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsInRvZ2dsZVNvcnQiLCJlIiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJFeHBhbmRlckNvbXBvbmVudCIsImlzRXhwYW5kZWQiLCJQaXZvdFZhbHVlQ29tcG9uZW50Iiwic3ViUm93cyIsImxlbmd0aCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJwcmV2aWV3VmFsdWVzIiwiZCIsIm1hcCIsImkiLCJQaXZvdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJQcmV2aW91c0NvbXBvbmVudCIsIk5leHRDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0E7QUFDQSxPQUFPQyxDQUFQLE1BQWMsU0FBZDtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsY0FBdkI7O0FBRUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTyxFQUFQO0FBQUEsQ0FBakI7O0FBRUEsZUFBZTtBQUNiO0FBQ0FDLFFBQU0sRUFGTztBQUdiQyxlQUFhO0FBQUEsV0FBUUQsSUFBUjtBQUFBLEdBSEE7QUFJYkUsV0FBUyxLQUpJO0FBS2JDLGtCQUFnQixJQUxIO0FBTWJDLHFCQUFtQixLQU5OO0FBT2JDLHdCQUFzQixJQVBUO0FBUWJDLHVCQUFxQixJQVJSO0FBU2JDLG1CQUFpQixDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0FUSjtBQVViQyxlQUFhLENBVkE7QUFXYkMsbUJBQWlCLEVBWEo7QUFZ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cUQsU0FBL0MsQ0FBaEIsSUFBK0V5RCxJQUEvRTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFBaUNQO0FBQWpDO0FBREYsS0FIZ0I7QUFBQSxHQXZQTDtBQThQYnFDLG1CQUFpQmpKLEVBQUVxSCxxQkFBRixDQUF3QixXQUF4QixFQUFxQyxRQUFyQyxDQTlQSjtBQStQYjZCLG9CQUFrQmxKLEVBQUVxSCxxQkFBRixDQUF3QixZQUF4QixFQUFzQyxTQUF0QyxDQS9QTDtBQWdRYjhCLG1CQUFpQjtBQUFBLFdBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOO0FBQUE7QUFoUUosQ0FBZiIsImZpbGUiOiJkZWZhdWx0UHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuLy9cbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24nXG5cbmNvbnN0IGVtcHR5T2JqID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIEdlbmVyYWxcbiAgZGF0YTogW10sXG4gIHJlc29sdmVEYXRhOiBkYXRhID0+IGRhdGEsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaG93UGFnaW5hdGlvbjogdHJ1ZSxcbiAgc2hvd1BhZ2luYXRpb25Ub3A6IGZhbHNlLFxuICBzaG93UGFnaW5hdGlvbkJvdHRvbTogdHJ1ZSxcbiAgc2hvd1BhZ2VTaXplT3B0aW9uczogdHJ1ZSxcbiAgcGFnZVNpemVPcHRpb25zOiBbNSwgMTAsIDIwLCAyNSwgNTAsIDEwMF0sXG4gIGRlZmF1bHRQYWdlOiAwLFxuICBkZWZhdWx0UGFnZVNpemU6IDIwLFxuICBzaG93UGFnZUp1bXA6IHRydWUsXG4gIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlOiB0cnVlLFxuICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogdHJ1ZSxcbiAgY29sbGFwc2VPbkRhdGFDaGFuZ2U6IHRydWUsXG4gIGZyZWV6ZVdoZW5FeHBhbmRlZDogZmFsc2UsXG4gIHNvcnRhYmxlOiB0cnVlLFxuICBtdWx0aVNvcnQ6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgZmlsdGVyYWJsZTogZmFsc2UsXG4gIGRlZmF1bHRTb3J0RGVzYzogZmFsc2UsXG4gIGRlZmF1bHRTb3J0ZWQ6IFtdLFxuICBkZWZhdWx0RmlsdGVyZWQ6IFtdLFxuICBkZWZhdWx0UmVzaXplZDogW10sXG4gIGRlZmF1bHRFeHBhbmRlZDoge30sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBkZWZhdWx0RmlsdGVyTWV0aG9kOiAoZmlsdGVyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IGlkID0gZmlsdGVyLnBpdm90SWQgfHwgZmlsdGVyLmlkXG4gICAgcmV0dXJuIHJvd1tpZF0gIT09IHVuZGVmaW5lZCA/IFN0cmluZyhyb3dbaWRdKS5zdGFydHNXaXRoKGZpbHRlci52YWx1ZSkgOiB0cnVlXG4gIH0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBkZWZhdWx0U29ydE1ldGhvZDogKGEsIGIsIGRlc2MpID0+IHtcbiAgICAvLyBmb3JjZSBudWxsIGFuZCB1bmRlZmluZWQgdG8gdGhlIGJvdHRvbVxuICAgIGEgPSBhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCA/ICcnIDogYVxuICAgIGIgPSBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCA/ICcnIDogYlxuICAgIC8vIGZvcmNlIGFueSBzdHJpbmcgdmFsdWVzIHRvIGxvd2VyY2FzZVxuICAgIGEgPSB0eXBlb2YgYSA9PT0gJ3N0cmluZycgPyBhLnRvTG93ZXJDYXNlKCkgOiBhXG4gICAgYiA9IHR5cGVvZiBiID09PSAnc3RyaW5nJyA/IGIudG9Mb3dlckNhc2UoKSA6IGJcbiAgICAvLyBSZXR1cm4gZWl0aGVyIDEgb3IgLTEgdG8gaW5kaWNhdGUgYSBzb3J0IHByaW9yaXR5XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICAvLyByZXR1cm5pbmcgMCwgdW5kZWZpbmVkIG9yIGFueSBmYWxzZXkgdmFsdWUgd2lsbCB1c2Ugc3Vic2VxdWVudCBzb3J0cyBvclxuICAgIC8vIHRoZSBpbmRleCBhcyBhIHRpZWJyZWFrZXJcbiAgICByZXR1cm4gMFxuICB9LFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgUHJvcHNcbiAgLy8gcGFnZTogdW5kZWZpbmVkLFxuICAvLyBwYWdlU2l6ZTogdW5kZWZpbmVkLFxuICAvLyBzb3J0ZWQ6IFtdLFxuICAvLyBmaWx0ZXJlZDogW10sXG4gIC8vIHJlc2l6ZWQ6IFtdLFxuICAvLyBleHBhbmRlZDoge30sXG5cbiAgLy8gQ29udHJvbGxlZCBTdGF0ZSBDYWxsYmFja3NcbiAgb25QYWdlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uUGFnZVNpemVDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25Tb3J0ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25GaWx0ZXJlZENoYW5nZTogdW5kZWZpbmVkLFxuICBvblJlc2l6ZWRDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25FeHBhbmRlZENoYW5nZTogdW5kZWZpbmVkLFxuXG4gIC8vIFBpdm90aW5nXG4gIHBpdm90Qnk6IHVuZGVmaW5lZCxcblxuICAvLyBLZXkgQ29uc3RhbnRzXG4gIHBpdm90VmFsS2V5OiAnX3Bpdm90VmFsJyxcbiAgcGl2b3RJREtleTogJ19waXZvdElEJyxcbiAgc3ViUm93c0tleTogJ19zdWJSb3dzJyxcbiAgYWdncmVnYXRlZEtleTogJ19hZ2dyZWdhdGVkJyxcbiAgbmVzdGluZ0xldmVsS2V5OiAnX25lc3RpbmdMZXZlbCcsXG4gIG9yaWdpbmFsS2V5OiAnX29yaWdpbmFsJyxcbiAgaW5kZXhLZXk6ICdfaW5kZXgnLFxuICBncm91cGVkQnlQaXZvdEtleTogJ19ncm91cGVkQnlQaXZvdCcsXG5cbiAgLy8gU2VydmVyLXNpZGUgQ2FsbGJhY2tzXG4gIG9uRmV0Y2hEYXRhOiAoKSA9PiBudWxsLFxuXG4gIC8vIENsYXNzZXNcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGFibGVQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkR3JvdXBUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRHcm91cFRoUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUaGVhZFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRUaFByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGhlYWRGaWx0ZXJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyVHJQcm9wczogZW1wdHlPYmosXG4gIGdldFRoZWFkRmlsdGVyVGhQcm9wczogZW1wdHlPYmosXG4gIGdldFRib2R5UHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUckdyb3VwUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUclByb3BzOiBlbXB0eU9iaixcbiAgZ2V0VGRQcm9wczogZW1wdHlPYmosXG4gIGdldFRmb290UHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFRyUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRUZm9vdFRkUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRQYWdpbmF0aW9uUHJvcHM6IGVtcHR5T2JqLFxuICBnZXRMb2FkaW5nUHJvcHM6IGVtcHR5T2JqLFxuICBnZXROb0RhdGFQcm9wczogZW1wdHlPYmosXG4gIGdldFJlc2l6ZXJQcm9wczogZW1wdHlPYmosXG5cbiAgLy8gR2xvYmFsIENvbHVtbiBEZWZhdWx0c1xuICBjb2x1bW46IHtcbiAgICAvLyBSZW5kZXJlcnNcbiAgICBDZWxsOiB1bmRlZmluZWQsXG4gICAgSGVhZGVyOiB1bmRlZmluZWQsXG4gICAgRm9vdGVyOiB1bmRlZmluZWQsXG4gICAgQWdncmVnYXRlZDogdW5kZWZpbmVkLFxuICAgIFBpdm90OiB1bmRlZmluZWQsXG4gICAgUGl2b3RWYWx1ZTogdW5kZWZpbmVkLFxuICAgIEV4cGFuZGVyOiB1bmRlZmluZWQsXG4gICAgRmlsdGVyOiB1bmRlZmluZWQsXG4gICAgLy8gQWxsIENvbHVtbnNcbiAgICBzb3J0YWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgIHJlc2l6YWJsZTogdW5kZWZpbmVkLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgIGZpbHRlcmFibGU6IHVuZGVmaW5lZCwgLy8gdXNlIHRhYmxlIGRlZmF1bHRcbiAgICBzaG93OiB0cnVlLFxuICAgIG1pbldpZHRoOiAxMDAsXG4gICAgbWluUmVzaXplV2lkdGg6IDExLFxuICAgIC8vIENlbGxzIG9ubHlcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHN0eWxlOiB7fSxcbiAgICBnZXRQcm9wczogZW1wdHlPYmosXG4gICAgLy8gUGl2b3Qgb25seVxuICAgIGFnZ3JlZ2F0ZTogdW5kZWZpbmVkLFxuICAgIC8vIEhlYWRlcnMgb25seVxuICAgIGhlYWRlckNsYXNzTmFtZTogJycsXG4gICAgaGVhZGVyU3R5bGU6IHt9LFxuICAgIGdldEhlYWRlclByb3BzOiBlbXB0eU9iaixcbiAgICAvLyBGb290ZXJzIG9ubHlcbiAgICBmb290ZXJDbGFzc05hbWU6ICcnLFxuICAgIGZvb3RlclN0eWxlOiB7fSxcbiAgICBnZXRGb290ZXJQcm9wczogZW1wdHlPYmosXG4gICAgZmlsdGVyTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgZmlsdGVyQWxsOiBmYWxzZSxcbiAgICBzb3J0TWV0aG9kOiB1bmRlZmluZWQsXG4gIH0sXG5cbiAgLy8gR2xvYmFsIEV4cGFuZGVyIENvbHVtbiBEZWZhdWx0c1xuICBleHBhbmRlckRlZmF1bHRzOiB7XG4gICAgc29ydGFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgd2lkdGg6IDM1LFxuICB9LFxuXG4gIHBpdm90RGVmYXVsdHM6IHtcbiAgICAvLyBleHRlbmQgdGhlIGRlZmF1bHRzIGZvciBwaXZvdGVkIGNvbHVtbnMgaGVyZVxuICB9LFxuXG4gIC8vIFRleHRcbiAgcHJldmlvdXNUZXh0OiAnUHJldmlvdXMnLFxuICBuZXh0VGV4dDogJ05leHQnLFxuICBsb2FkaW5nVGV4dDogJ0xvYWRpbmcuLi4nLFxuICBub0RhdGFUZXh0OiAnTm8gcm93cyBmb3VuZCcsXG4gIHBhZ2VUZXh0OiAnUGFnZScsXG4gIG9mVGV4dDogJ29mJyxcbiAgcm93c1RleHQ6ICdyb3dzJyxcblxuICAvLyBDb21wb25lbnRzXG4gIFRhYmxlQ29tcG9uZW50OiAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LXRhYmxlJywgY2xhc3NOYW1lKX1cbiAgICAgIHJvbGU9XCJncmlkXCJcbiAgICAgIC8vIHRhYkluZGV4PScwJ1xuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBUaGVhZENvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXRoZWFkJywgJ1RoZWFkJyksXG4gIFRib2R5Q29tcG9uZW50OiBfLm1ha2VUZW1wbGF0ZUNvbXBvbmVudCgncnQtdGJvZHknLCAnVGJvZHknKSxcbiAgVHJHcm91cENvbXBvbmVudDogKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LXRyLWdyb3VwJywgY2xhc3NOYW1lKX0gcm9sZT1cInJvd2dyb3VwXCIgey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApLFxuICBUckNvbXBvbmVudDogKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LXRyJywgY2xhc3NOYW1lKX0gcm9sZT1cInJvd1wiIHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgVGhDb21wb25lbnQ6ICh7XG4gICAgdG9nZ2xlU29ydCwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdFxuICB9KSA9PiAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHNcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LXRoJywgY2xhc3NOYW1lKX1cbiAgICAgIG9uQ2xpY2s9e2UgPT4gdG9nZ2xlU29ydCAmJiB0b2dnbGVTb3J0KGUpfVxuICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICB0YWJJbmRleD1cIi0xXCIgLy8gUmVzb2x2ZXMgZXNsaW50IGlzc3VlcyB3aXRob3V0IGltcGxlbWVudGluZyBrZXlib2FyZCBuYXZpZ2F0aW9uIGluY29ycmVjdGx5XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIFRkQ29tcG9uZW50OiAoe1xuICAgIHRvZ2dsZVNvcnQsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3RcbiAgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdydC10ZCcsIGNsYXNzTmFtZSl9IHJvbGU9XCJncmlkY2VsbFwiIHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgVGZvb3RDb21wb25lbnQ6IF8ubWFrZVRlbXBsYXRlQ29tcG9uZW50KCdydC10Zm9vdCcsICdUZm9vdCcpLFxuICBGaWx0ZXJDb21wb25lbnQ6ICh7IGZpbHRlciwgb25DaGFuZ2UgfSkgPT4gKFxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgICB2YWx1ZT17ZmlsdGVyID8gZmlsdGVyLnZhbHVlIDogJyd9XG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICApLFxuICBFeHBhbmRlckNvbXBvbmVudDogKHsgaXNFeHBhbmRlZCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3J0LWV4cGFuZGVyJywgaXNFeHBhbmRlZCAmJiAnLW9wZW4nKX0+JmJ1bGw7PC9kaXY+XG4gICksXG4gIFBpdm90VmFsdWVDb21wb25lbnQ6ICh7IHN1YlJvd3MsIHZhbHVlIH0pID0+IChcbiAgICA8c3Bhbj5cbiAgICAgIHt2YWx1ZX0ge3N1YlJvd3MgJiYgYCgke3N1YlJvd3MubGVuZ3RofSlgfVxuICAgIDwvc3Bhbj5cbiAgKSxcbiAgQWdncmVnYXRlZENvbXBvbmVudDogKHsgc3ViUm93cywgY29sdW1uIH0pID0+IHtcbiAgICBjb25zdCBwcmV2aWV3VmFsdWVzID0gc3ViUm93cy5maWx0ZXIoZCA9PiB0eXBlb2YgZFtjb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJykubWFwKChyb3csIGkpID0+IChcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgIDxzcGFuIGtleT17aX0+XG4gICAgICAgIHtyb3dbY29sdW1uLmlkXX1cbiAgICAgICAge2kgPCBzdWJSb3dzLmxlbmd0aCAtIDEgPyAnLCAnIDogJyd9XG4gICAgICA8L3NwYW4+XG4gICAgKSlcbiAgICByZXR1cm4gPHNwYW4+e3ByZXZpZXdWYWx1ZXN9PC9zcGFuPlxuICB9LFxuICBQaXZvdENvbXBvbmVudDogdW5kZWZpbmVkLCAvLyB0aGlzIGlzIGEgY29tcHV0ZWQgZGVmYXVsdCBnZW5lcmF0ZWQgdXNpbmdcbiAgLy8gdGhlIEV4cGFuZGVyQ29tcG9uZW50IGFuZCBQaXZvdFZhbHVlQ29tcG9uZW50IGF0IHJ1bi10aW1lIGluIG1ldGhvZHMuanNcbiAgUGFnaW5hdGlvbkNvbXBvbmVudDogUGFnaW5hdGlvbixcbiAgUHJldmlvdXNDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgTmV4dENvbXBvbmVudDogdW5kZWZpbmVkLFxuICBMb2FkaW5nQ29tcG9uZW50OiAoe1xuICAgIGNsYXNzTmFtZSwgbG9hZGluZywgbG9hZGluZ1RleHQsIC4uLnJlc3RcbiAgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctbG9hZGluZycsIHsgJy1hY3RpdmUnOiBsb2FkaW5nIH0sIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLWxvYWRpbmctaW5uZXJcIj57bG9hZGluZ1RleHR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICksXG4gIE5vRGF0YUNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LW5vRGF0YScsICdOb0RhdGEnKSxcbiAgUmVzaXplckNvbXBvbmVudDogXy5tYWtlVGVtcGxhdGVDb21wb25lbnQoJ3J0LXJlc2l6ZXInLCAnUmVzaXplcicpLFxuICBQYWRSb3dDb21wb25lbnQ6ICgpID0+IDxzcGFuPiZuYnNwOzwvc3Bhbj4sXG59XG4iXX0=