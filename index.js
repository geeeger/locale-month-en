"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MonthShort;
(function (MonthShort) {
    MonthShort[MonthShort["Jan"] = 0] = "Jan";
    MonthShort[MonthShort["Feb"] = 1] = "Feb";
    MonthShort[MonthShort["Mar"] = 2] = "Mar";
    MonthShort[MonthShort["Apr"] = 3] = "Apr";
    MonthShort[MonthShort["May"] = 4] = "May";
    MonthShort[MonthShort["Jun"] = 5] = "Jun";
    MonthShort[MonthShort["Jul"] = 6] = "Jul";
    MonthShort[MonthShort["Aug"] = 7] = "Aug";
    MonthShort[MonthShort["Sep"] = 8] = "Sep";
    MonthShort[MonthShort["Oct"] = 9] = "Oct";
    MonthShort[MonthShort["Nov"] = 10] = "Nov";
    MonthShort[MonthShort["Dec"] = 11] = "Dec";
})(MonthShort || (MonthShort = {}));
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
exports.default = {
    short: MonthShort,
    min: MonthShort,
    default: Month
};
