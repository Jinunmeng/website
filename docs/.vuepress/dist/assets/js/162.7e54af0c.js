(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{231:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"endpoint-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Endpoint.hpp"),s("seo")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/server/api/Endpoint.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/server/api/Endpoint.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Endpoint - class which holds information about endpoint. It holds API documentation info, and pointer to RequestHandler")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("table",[t._m(4),t._v(" "),s("tbody",[s("tr",[t._m(5),t._v(" "),t._m(6),t._v(" "),s("td",[t._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/server/HttpRequestHandler/#httprequesthandler"}},[t._v("oatpp::web::server::HttpRequestHandler")]),t._v(".")],1)])])]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/server/HttpRequestHandler/#httprequesthandler"}},[t._v("oatpp::web::server::HttpRequestHandler")]),t._v(".")],1),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("Info holds API documentation information about endpoint")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v('ResponseCode to {ContentType, Type} mapping.  Example responses[Status::CODE_200] = {"application/json", MyDto::ObjectWrapper::Class::getType()};')]),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("Param holds info about parameter")]),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("Info about content type and schema")]),t._v(" "),t._m(18),t._m(19),t._v(" "),s("p",[t._v("Parameters container")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("API: latest")]),a("br"),this._v(" "),a("code",[this._v("module: oatpp")]),a("br"),this._v(" "),a("code",[this._v('#include "oatpp/web/server/api/Endpoint.hpp"')])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Endpoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"typedefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typedefs","aria-hidden":"true"}},[this._v("#")]),this._v(" Typedefs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Type")]),this._v(" "),a("th",[this._v("Name")]),this._v(" "),a("th",[this._v("Summary")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("code",[this._v("oatpp::web::server::HttpRequestHandler")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("a",{attrs:{href:"#endpoint-requesthandler"}},[this._v("RequestHandler")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"endpoint-requesthandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-requesthandler","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::RequestHandler")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpRequestHandler RequestHandler\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"endpoint-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-info","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::Info")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Endpoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Info")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("std::unordered_map<oatpp::web::protocol::http::Status, ContentTypeAndSchema>")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#endpoint-info-responses"}},[t._v("responses")])]),t._v(" "),s("td",[t._v('ResponseCode to {ContentType, Type} mapping.  Example responses[Status::CODE_200] = {"application/json", MyDto::ObjectWrapper::Class::getType()};')])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"endpoint-info-responses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-info-responses","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::Info::responses")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("unordered_map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ContentTypeAndSchema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" responses\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"endpoint-info-param"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-info-param","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::Info::Param")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Endpoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Info")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Param")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"endpoint-info-contenttypeandschema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-info-contenttypeandschema","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::Info::ContentTypeAndSchema")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Endpoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Info")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContentTypeAndSchema")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"endpoint-info-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-info-params","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::Info::Params")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Endpoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Info")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Params")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Fields")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Param&")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#endpoint-info-params-operator"}},[t._v("operator")])]),t._v(" "),s("td",[t._v("Get or add param by name "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" name ")]),s("li",[s("strong",[t._v("@return")])])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("Return Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Param&")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#endpoint-info-params-add"}},[t._v("add")])]),t._v(" "),s("td",[t._v("Multiple implementations: "),s("br"),s("ol",[s("li",[t._v("Add parameter name to list order ")]),s("li",[t._v("Add parameter name to list order ")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"endpoint-info-params-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-info-params-operator","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::Info::Params::operator")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Get or add param by name "),a("ul",[a("li",[a("strong",[this._v("@param")]),this._v(" name ")]),a("li",[a("strong",[this._v("@return")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"endpoint-info-params-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-info-params-add","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint::Info::Params::add")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[t._v("Add parameter name to list order "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" name ")]),s("li",[s("strong",[t._v("@return")]),t._v(" new or existing parameter ")])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Add parameter name to list order "),s("ul",[s("li",[s("strong",[t._v("@tparam")]),t._v(" T ")]),s("li",[s("strong",[t._v("@param")]),t._v(" name ")]),s("li",[s("strong",[t._v("@return")]),t._v(" new or existing parameter ")])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nParam"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])}],!1,null,null,null);a.default=n.exports}}]);