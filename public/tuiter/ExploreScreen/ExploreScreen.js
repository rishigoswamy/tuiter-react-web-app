import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "../PostSummaryList/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import who from "../WhoToFollowList/who.js";
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-10 col-md-10 col-lg-7 col-xl-6">
            ${ExploreComponent()}
         </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        
            ${WhoToFollowList()}
        </div>

        </div>
    `);
})($);
