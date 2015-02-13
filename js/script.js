jQuery(document).ready(function(){
	

$('#typerider_vimeo').css('display','none');
$('#chickendoom_vimeo').css('display','none');
$('#holyshield_vimeo').css('display','none');
$('#remotectrl_explanation_video').css('display','none');
$('#3D_scanning_video').css('display','none');

	$('.overlay-close').click(function(){
		
		$('body').css('overflow', 'auto');
		var video = $('#3D_scanning_video').attr("src");
					$('#3D_scanning_video').attr("src","");
					$('#3D_scanning_video').attr("src",video);
		video = $('#remotectrl_explanation_video').attr("src");
					$('#remotectrl_explanation_video').attr("src","");
					$('#remotectrl_explanation_video').attr("src",video);
		video = $('#remotectrl_live_video').attr("src");
					$('#remotectrl_live_video').attr("src","");
					$('#remotectrl_live_video').attr("src",video);
		video = $('#typerider_vimeo').attr("src");
					$('#typerider_vimeo').attr("src","");
					$('#typerider_vimeo').attr("src",video);
		video = $('#chickendoom_vimeo').attr("src");
					$('#chickendoom_vimeo').attr("src","");
					$('#chickendoom_vimeo').attr("src",video);
			$('#typerider_view').css('visibility', 'hidden');
			$('#dentressengle_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
			$('#remotectrl_elec_view').css('visibility','hidden');
			$('#virtualvisitSuez_view').css('visibility','hidden');

			$('#VR_Spaceship_Flight_video').css('display','none');
			$('#virtual_visit_FN_video').css('display','none');
			$('#remotectrl_explanation_video').css('display','none');
			$('#remotectrl_live_video').css('display','none');
			$('#3D_scanning_video').css('display','none');
			$('#typerider_vimeo').css('display','none');	
			$('#chickendoom_vimeo').css('display','none');	
			$('#holyshield_vimeo').css('display','none');	

	})
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#typerider').click(function(){
		$('#typerider_view').find('.articles').scrollTop(0);
		$('#typerider_view').css('visibility', 'visible');
		$('#typerider_vimeo').css('display','inline');
		$('body').css('overflow', 'hidden');

			$('#dentressengle_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
			$('#remotectrl_elec_view').css('visibility','hidden');
			
	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#typerider_view').click(function(){
			if($(event.target).attr('id') == 'typerider_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');
					var video = $('#typerider_vimeo').attr("src");
					$('#typerider_vimeo').attr("src","");
					$('#typerider_vimeo').attr("src",video);
					$('#typerider_vimeo').css('display','none');	
				}			
		});
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#dentressengle').click(function(){
		$('#dentressengle_view').find('.articles').scrollTop(0);
		$('#dentressengle_view').css('visibility', 'visible');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');

	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#dentressengle_view').click(function(){		
			if($(event.target).attr('id') == 'dentressengle_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#parvis').click(function(){
		$('#parvis_view').find('.articles').scrollTop(0);
		$('#parvis_view').css('visibility', 'visible');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#parvis_view').click(function(){	
			if($(event.target).attr('id') == 'parvis_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#oculus').click(function(){
		$('#VR_Spaceship_Flight_video').css('display','inline');
		$('#oculus_view').find('.articles').scrollTop(0);
		$('#oculus_view').css('visibility', 'visible');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
	});	
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#oculus_view').click(function(){	
			if($(event.target).attr('id') == 'oculus_view'){
				video = $('#VR_Spaceship_Flight_video').attr("src");
						$('#VR_Spaceship_Flight_video').attr("src","");
						$('#VR_Spaceship_Flight_video').attr("src",video);
						$('#VR_Spaceship_Flight_video').css('display','none');
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#motorsmob').click(function(){
		$('#motorsmob_view').find('.articles').scrollTop(0);
		$('#motorsmob_view').css('visibility', 'visible');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#motorsmob_view').click(function(){	
			if($(event.target).attr('id') == 'motorsmob_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
			}
		});
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#chickendoom').click(function(){
		$('#chickendoom_view').find('.articles').scrollTop(0);
		$('#chickendoom_view').css('visibility', 'visible');
		$('#chickendoom_vimeo').css('display','inline');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#chickendoom_view').click(function(){
			if($(event.target).attr('id') == 'chickendoom_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');
					var video = $('#chickendoom_vimeo').attr("src");
					$('#chickendoom_vimeo').attr("src","");
					$('#chickendoom_vimeo').attr("src",video);
					$('#chickendoom_vimeo').css('display','none');	
				}	
		});	
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#realhuman').click(function(){
		$('#realhuman_view').find('.articles').scrollTop(0);
		$('#realhuman_view').css('visibility', 'visible');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#realhuman_view').click(function(){	
			if($(event.target).attr('id') == 'realhuman_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});	
		
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#holyshield').click(function(){
		$('#holyshield_view').find('.articles').scrollTop(0);
		$('#holyshield_view').css('visibility', 'visible');
		$('#holyshield_vimeo').css('display','inline');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#holyshield_view').click(function(){	
			if($(event.target).attr('id') == 'holyshield_view'){
					$('#holyshield_vimeo').css('display','none');
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});			
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#custom_3D').click(function(){
		$('#custom_3D_view').find('.articles').scrollTop(0);
		$('#custom_3D_view').css('visibility', 'visible');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#3D_scanning_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');

	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#custom_3D_view').click(function(){	
			if($(event.target).attr('id') == 'custom_3D_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});			

	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#3D_scanning').click(function(){
		$('#3D_scanning_view').find('.articles').scrollTop(0);
		$('#3D_scanning_view').css('visibility', 'visible');
		$('#3D_scanning_video').css('display','inline');
		$('body').css('overflow', 'hidden');
			$('#typerider_view').css('visibility', 'hidden');
			$('#parvis_view').css('visibility', 'hidden');
			$('#oculus_view').css('visibility', 'hidden');
			$('#motorsmob_view').css('visibility', 'hidden');
			$('#realhuman_view').css('visibility', 'hidden');
			$('#chickendoom_view').css('visibility', 'hidden');
			$('#custom_3D_view').css('visibility', 'hidden');
			$('#holyshield_view').css('visibility', 'hidden');
			$('#cardboard_view').css('visibility', 'hidden');
			$('#remotectrl_view').css('visibility', 'hidden');
			
	});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#3D_scanning_view').click(function(){	
			if($(event.target).attr('id') == '3D_scanning_view'){
					var video = $('#3D_scanning_video').attr("src");
					$('#3D_scanning_video').attr("src","");
					$('#3D_scanning_video').attr("src",video);
					$(this).css('visibility', 'hidden');
					$('#3D_scanning_video').css('display','none');
					$('body').css('overflow', 'auto');	
				}
		});			

	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#cardboard').click(function(){
		$('#cardboard_view').find('.articles').scrollTop(0);
			$('#cardboard_view').css('visibility', 'visible');
			$('body').css('overflow', 'hidden');
				$('#typerider_view').css('visibility', 'hidden');
				$('#parvis_view').css('visibility', 'hidden');
				$('#oculus_view').css('visibility', 'hidden');
				$('#motorsmob_view').css('visibility', 'hidden');
				$('#realhuman_view').css('visibility', 'hidden');
				$('#chickendoom_view').css('visibility', 'hidden');
				$('#custom_3D_view').css('visibility', 'hidden');
				$('#holyshield_view').css('visibility', 'hidden');
				$('#remotectrl_view').css('visibility', 'hidden');
				
		});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#cardboard_view').click(function(){	
			if($(event.target).attr('id') == 'cardboard_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});	
	<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#remotectrl').click(function(){
			$('#remotectrl_view').css('visibility', 'visible');
			$('body').css('overflow', 'hidden');
			$('#remotectrl_explanation_video').css('display','inline');
			$('#remotectrl_live_video').css('display','inline');
			$('#remotectrl_view').find('.articles').scrollTop(0);
				$('#cardboard_view').css('visibility', 'hidden');
				$('#typerider_view').css('visibility', 'hidden');
				$('#parvis_view').css('visibility', 'hidden');
				$('#oculus_view').css('visibility', 'hidden');
				$('#motorsmob_view').css('visibility', 'hidden');
				$('#realhuman_view').css('visibility', 'hidden');
				$('#chickendoom_view').css('visibility', 'hidden');
				$('#custom_3D_view').css('visibility', 'hidden');
				$('#holyshield_view').css('visibility', 'hidden');
				$('#remotectrl_elec_view').css('visibility','hidden');
				
		});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#remotectrl_view').click(function(event){
					if($(event.target).attr('id') == 'remotectrl_view'){
						video = $('#remotectrl_explanation_video').attr("src");
						$('#remotectrl_explanation_video').attr("src","");
						$('#remotectrl_explanation_video').attr("src",video);
						$('#remotectrl_explanation_video').css('display','none');
						video = $('#remotectrl_live_video').attr("src");
						$('#remotectrl_live_video').attr("src","");
						$('#remotectrl_live_video').attr("src",video);
						$('#remotectrl_live_video').css('display','none');
						$(this).css('visibility', 'hidden');
						$('body').css('overflow', 'auto');	
					}
					
		});	

		$('#next_remotectrl_view').click(function(){
			video = $('#remotectrl_explanation_video').attr("src");
					$('#remotectrl_explanation_video').attr("src","");
					$('#remotectrl_explanation_video').attr("src",video);
					$('#remotectrl_explanation_video').css('display','none');
			video = $('#remotectrl_live_video').attr("src");
					$('#remotectrl_live_video').attr("src","");
					$('#remotectrl_live_video').attr("src",video);
					$('#remotectrl_live_video').css('display','none');
			$('#remotectrl_elec_view').find('.articles').scrollTop(0);
			$('#remotectrl_elec_view').css('visibility','visible');
			$('#remotectrl_view').css('visibility','hidden');
			$('body').css('overflow', 'hidden');
			
		});
		<!-- To quit the pop-up and reactivate the scroll -->
		$('#remotectrl_elec_view').click(function(){
				if($(event.target).attr('id') == 'remotectrl_elec_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}		
		});

		$('#prev_remotectrl_elec_view').click(function(){
			$('#remotectrl_view').css('visibility', 'visible');
			$('body').css('overflow', 'hidden');
			$('#remotectrl_elec_view').css('visibility','hidden');
			$('#remotectrl_explanation_video').css('display','inline');
		});
	
		<!-- To activate the pop-up and desactivate the global the scroll -->	
	$('#virtualvisitSuez').click(function(){
			$('#virtualvisitSuez_view').css('visibility', 'visible');
			$('body').css('overflow', 'hidden');
			$('#virtual_visit_FN_video').css('display','inline');
			$('#virtualvisitSuez_view').find('.articles').scrollTop(0);
				$('#cardboard_view').css('visibility', 'hidden');
				$('#typerider_view').css('visibility', 'hidden');
				$('#parvis_view').css('visibility', 'hidden');
				$('#oculus_view').css('visibility', 'hidden');
				$('#motorsmob_view').css('visibility', 'hidden');
				$('#realhuman_view').css('visibility', 'hidden');
				$('#chickendoom_view').css('visibility', 'hidden');
				$('#custom_3D_view').css('visibility', 'hidden');
				$('#holyshield_view').css('visibility', 'hidden');
				$('#remotectrl_elec_view').css('visibility','hidden');
				
		});
	<!-- To quit the pop-up and reactivate the scroll -->
		$('#virtualvisitSuez_view').click(function(event){
					if($(event.target).attr('id') == 'virtualvisitSuez_view'){
						video = $('#virtual_visit_FN_video').attr("src");
						$('#virtual_visit_FN_video').attr("src","");
						$('#virtual_visit_FN_video').attr("src",video);
						$('#virtual_visit_FN_video').css('display','none');
						$(this).css('visibility', 'hidden');
						$('body').css('overflow', 'auto');	
					}
					
		});	


});


