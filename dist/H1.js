"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * H1 compononent renders a heading
 */
var H1 = /** @class */ (function (_super) {
    __extends(H1, _super);
    function H1(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        return _this;
    }
    H1.prototype.render = function () {
        return (React.createElement("h1", { className: this.props.className }, this.props.children));
    };
    return H1;
}(React.Component));
exports.default = H1;
