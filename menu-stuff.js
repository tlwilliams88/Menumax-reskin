function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = ".navbar ";
        e("body").hasClass("layout-sidebar") && (t = ".sidebar-container");
        var n = e('.navbar [data-navbar-role="menu-open"]'),
            r = e('.navbar [data-navbar-role="menu"]'),
            i = "menu-open",
            o = "data-navbar-menu-state",
            a = ".toggle-menu";
        return {
            reset: function() {
                e("body").removeAttr(o), e(a).off("click"), e(".sidebar-menu-content").removeClass("current"), e('[data-navbar-role="menu"]').removeClass(i)
            },
            init: function() {
                n && r && e(n).on("click", function() {
                    e(r).toggleClass(i), e(r).hasClass(i) ? (e("body").attr(o, "open"), e(a).on("click", function(n) {
                        n.preventDefault(), e(".sidebar-menu-content").removeClass("current"), e("#" + e(n.target).attr("data-menu-for")).addClass("current"), e(t + '[data-navbar-role="menu"]').toggleClass(i)
                    })) : (e("body").removeAttr(o), e(a).off("click"), e(t + '[data-navbar-role="menu"]').removeClass(i))
                });
                var s = e(t + " [data-navbar-submenu-id]"),
                    l = e(t + " [data-navbar-submenu-control]");
                e(s).on("click", function() {
                    var t = this.id,
                        n = e('[data-navbar-submenu-control="' + t + '"]') || [];
                    n.length && (e(n[0]).is(":visible") ? (e(this).removeClass("active"), n.slideUp(200)) : (l.hide(), e(s).removeClass("active"), e(this).addClass("active"), n.slideDown(200)))
                }), l.hide()
            }
        }
    }