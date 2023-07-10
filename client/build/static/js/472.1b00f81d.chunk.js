"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[472],{3321:function(e,n,t){t(2791);var r=t(184);n.Z=function(){return(0,r.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},3472:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(2791),i=t(4165),s=t(5861),o=t(9439),l=t(3263),c=t(3402),a=t(3200),d=t(5318),u=t(9434),h=t(3321),v=t(4971),x=t(184);l.Z.defaults.baseURL="http://127.0.0.1:5000/api";var p=function(){var e=(0,r.useState)([]),n=(0,o.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,d.K4)(!0)),e.next=4,(0,v.Z)("/doctor/getnotdoctors");case 4:t=e.sent,p(t),j((0,d.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to accept?")){e.next=8;break}return e.next=5,c.ZP.promise(l.Z.put("/doctor/acceptdoctor",{id:n},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:n}}),{success:"Application accepted",error:"Unable to accept application",loading:"Accepting application..."});case 5:t=e.sent,t.data,f();case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to delete?")){e.next=8;break}return e.next=5,c.ZP.promise(l.Z.put("/doctor/rejectdoctor",{id:n},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:n}}),{success:"Application rejected",error:"Unable to reject application",loading:"Rejecting application..."});case 5:t=e.sent,t.data,f();case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){f()}),[]),(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(a.Z,{}):(0,x.jsxs)("section",{className:"user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Applications"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Pic"}),(0,x.jsx)("th",{children:"First Name"}),(0,x.jsx)("th",{children:"Last Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile No."}),(0,x.jsx)("th",{children:"Experience"}),(0,x.jsx)("th",{children:"Specialization"}),(0,x.jsx)("th",{children:"Fees"}),(0,x.jsx)("th",{children:"Action"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){var t,r,i,s,o,l;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{className:"user-table-pic",src:(null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.firstname})}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.lastname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(o=e.userId)||void 0===o?void 0:o.email}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.mobile}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.experience}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.specialization}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.fees}),(0,x.jsxs)("td",{className:"select",children:[(0,x.jsx)("button",{className:"btn user-btn accept-btn",onClick:function(){var n;b(null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n._id)},children:"Accept"}),(0,x.jsx)("button",{className:"btn user-btn",onClick:function(){var n;g(null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n._id)},children:"Reject"})]})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})};l.Z.defaults.baseURL="http://127.0.0.1:5000/api";var j=function(){var e=(0,r.useState)([]),n=(0,o.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,d.K4)(!0)),e.next=4,(0,v.Z)("/appointment/getallappointments");case 4:t=e.sent,p(t),j((0,d.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){f()}),[]);var b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t,r,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.ZP.promise(l.Z.put("/appointment/completed",{appointid:null===n||void 0===n?void 0:n._id,doctorId:null===n||void 0===n?void 0:n.doctorId._id,doctorname:"".concat(null===n||void 0===n||null===(t=n.userId)||void 0===t?void 0:t.firstname," ").concat(null===n||void 0===n||null===(r=n.userId)||void 0===r?void 0:r.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:s=e.sent,s.data,f(),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(a.Z,{}):(0,x.jsxs)("section",{className:" user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Users"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Doctor"}),(0,x.jsx)("th",{children:"Patient"}),(0,x.jsx)("th",{children:"Appointment Date"}),(0,x.jsx)("th",{children:"Appointment Time"}),(0,x.jsx)("th",{children:"Booking Date"}),(0,x.jsx)("th",{children:"Booking Time"}),(0,x.jsx)("th",{children:"Status"}),(0,x.jsx)("th",{children:"Action"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){var t,r,i,s;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(null===e||void 0===e||null===(t=e.doctorId)||void 0===t?void 0:t.firstname)+" "+(null===e||void 0===e||null===(r=e.doctorId)||void 0===r?void 0:r.lastname)}),(0,x.jsx)("td",{children:(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname)+" "+(null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.lastname)}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),(0,x.jsx)("td",{children:(0,x.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status),onClick:function(){return b(e)},children:"Complete"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})};l.Z.defaults.baseURL="http://127.0.0.1:5000/api";var m=function(){var e=(0,r.useState)([]),n=(0,o.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,d.K4)(!0)),e.next=4,(0,v.Z)("/doctor/getalldoctors");case 4:t=e.sent,p(t),j((0,d.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to delete?")){e.next=8;break}return e.next=5,c.ZP.promise(l.Z.put("/doctor/deletedoctor",{userId:n},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor deleted successfully",error:"Unable to delete Doctor",loading:"Deleting Doctor..."});case 5:t=e.sent,t.data,f();case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){f()}),[]),(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(a.Z,{}):(0,x.jsxs)("section",{className:"user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Doctors"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Pic"}),(0,x.jsx)("th",{children:"First Name"}),(0,x.jsx)("th",{children:"Last Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile No."}),(0,x.jsx)("th",{children:"Experience"}),(0,x.jsx)("th",{children:"Specialization"}),(0,x.jsx)("th",{children:"Fees"}),(0,x.jsx)("th",{children:"Remove"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){var t,r,i,s,o,l;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{className:"user-table-pic",src:null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.pic,alt:null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.firstname})}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.lastname}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(o=e.userId)||void 0===o?void 0:o.email}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.mobile}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.experience}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.specialization}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.fees}),(0,x.jsx)("td",{className:"select",children:(0,x.jsx)("button",{className:"btn user-btn",onClick:function(){var n;b(null===e||void 0===e||null===(n=e.userId)||void 0===n?void 0:n._id)},children:"Remove"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})},f=t(6355),b=t(7689),g=t(1087),Z=t(6856),N=function(){var e=(0,u.I0)(),n=(0,b.s0)(),t=[{name:"Home",path:"/",icon:(0,x.jsx)(f.xng,{})},{name:"Users",path:"/dashboard/users",icon:(0,x.jsx)(f.I$,{})},{name:"Doctors",path:"/dashboard/doctors",icon:(0,x.jsx)(f.Z5v,{})},{name:"Appointments",path:"/dashboard/appointments",icon:(0,x.jsx)(f.AeW,{})},{name:"Applications",path:"/dashboard/applications",icon:(0,x.jsx)(f.SRX,{})},{name:"Profile",path:"/profile",icon:(0,x.jsx)(f.Xws,{})}];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("section",{className:"sidebar-section flex-center",children:(0,x.jsxs)("div",{className:"sidebar-container",children:[(0,x.jsx)("ul",{children:t.map((function(e,n){return(0,x.jsxs)("li",{children:[e.icon,(0,x.jsx)(g.OL,{to:e.path,children:e.name})]},n)}))}),(0,x.jsxs)("div",{className:"logout-container",children:[(0,x.jsx)(Z.lE7,{}),(0,x.jsx)("p",{onClick:function(){e((0,d.ps)({})),localStorage.removeItem("token"),n("/login")},children:"Logout"})]})]})})})};l.Z.defaults.baseURL="http://127.0.0.1:5000/api";var k=function(){var e=(0,r.useState)([]),n=(0,o.Z)(e,2),t=n[0],p=n[1],j=(0,u.I0)(),m=(0,u.v9)((function(e){return e.root})).loading,f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,d.K4)(!0)),e.next=4,(0,v.Z)("/user/getallusers");case 4:t=e.sent,p(t),j((0,d.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Are you sure you want to delete?")){e.next=8;break}return e.next=5,c.ZP.promise(l.Z.delete("/user/deleteuser",{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{userId:n}}),{pending:"Deleting in...",success:"User deleted successfully",error:"Unable to delete user",loading:"Deleting user..."});case 5:t=e.sent,t.data,f();case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){f()}),[]),(0,x.jsx)(x.Fragment,{children:m?(0,x.jsx)(a.Z,{}):(0,x.jsxs)("section",{className:"user-section",children:[(0,x.jsx)("h3",{className:"home-sub-heading",children:"All Users"}),t.length>0?(0,x.jsx)("div",{className:"user-container",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No"}),(0,x.jsx)("th",{children:"Pic"}),(0,x.jsx)("th",{children:"First Name"}),(0,x.jsx)("th",{children:"Last Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile No."}),(0,x.jsx)("th",{children:"Age"}),(0,x.jsx)("th",{children:"Gender"}),(0,x.jsx)("th",{children:"Is Doctor"}),(0,x.jsx)("th",{children:"Remove"})]})}),(0,x.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n+1}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{className:"user-table-pic",src:null===e||void 0===e?void 0:e.pic,alt:null===e||void 0===e?void 0:e.firstname})}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.firstname}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.lastname}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.mobile}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.age}),(0,x.jsx)("td",{children:null===e||void 0===e?void 0:e.gender}),(0,x.jsx)("td",{children:null!==e&&void 0!==e&&e.isDoctor?"Yes":"No"}),(0,x.jsx)("td",{className:"select",children:(0,x.jsx)("button",{className:"btn user-btn",onClick:function(){b(null===e||void 0===e?void 0:e._id)},children:"Remove"})})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,x.jsx)(h.Z,{})]})})},I=function(e){var n=e.type;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("section",{className:"layout-section",children:(0,x.jsxs)("div",{className:"layout-container",children:[(0,x.jsx)(N,{}),"users"===n?(0,x.jsx)(k,{}):"doctors"===n?(0,x.jsx)(m,{}):"applications"===n?(0,x.jsx)(p,{}):"appointments"===n?(0,x.jsx)(j,{}):(0,x.jsx)(x.Fragment,{})]})})})}}}]);
//# sourceMappingURL=472.1b00f81d.chunk.js.map