jQuery(document).ready(function(){
	

$('#typerider_vimeo').css('display','none');
$('#chickendoom_vimeo').css('display','none');
$('#holyshield_vimeo').css('display','none');

	$('.overlay-close').click(function(){
		
		$('body').css('overflow', 'auto');
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
	})
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#typerider').click(function(){

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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#typerider_view').click(function(){
			if($(event.target).attr('id') == 'typerider_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');
					$('#typerider_vimeo').css('display','none');	
				}			
		});
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#dentressengle').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#dentressengle_view').click(function(){		
			if($(event.target).attr('id') == 'dentressengle_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#parvis').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#parvis_view').click(function(){	
			if($(event.target).attr('id') == 'parvis_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#oculus').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#oculus_view').click(function(){	
			if($(event.target).attr('id') == 'oculus_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#motorsmob').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#motorsmob_view').click(function(){	
			if($(event.target).attr('id') == 'motorsmob_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
			}
		});
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#chickendoom').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#chickendoom_view').click(function(){
			if($(event.target).attr('id') == 'chickendoom_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');
					$('#chickendoom_vimeo').css('display','none');	
				}	
		});	
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#realhuman').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#realhuman_view').click(function(){	
			if($(event.target).attr('id') == 'realhuman_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});	
		
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#holyshield').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#holyshield_view').click(function(){	
			if($(event.target).attr('id') == 'holyshield_view'){
					$('#holyshield_vimeo').css('display','none');
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});			
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#custom_3D').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#custom_3D_view').click(function(){	
			if($(event.target).attr('id') == 'custom_3D_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});			

	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#3D_scanning').click(function(){
		$('#3D_scanning_view').css('visibility', 'visible');
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#3D_scanning_view').click(function(){	
			if($(event.target).attr('id') == '3D_scanning_view'){
					$('#playerID'.get(0).stopVideo();
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});			

	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#cardboard').click(function(){
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#cardboard_view').click(function(){	
			if($(event.target).attr('id') == 'cardboard_view'){
					$(this).css('visibility', 'hidden');
					$('body').css('overflow', 'auto');	
				}
		});	
	<!-- To activate the pop-up and desactivate the global the scrool -->	
	$('#remotectrl').click(function(){
			$('#remotectrl_view').css('visibility', 'visible');
			$('body').css('overflow', 'hidden');
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
	<!-- To quit the pop-up and reactivate the scrool -->
		$('#remotectrl_view').click(function(event){
					if($(event.target).attr('id') == 'remotectrl_view'){
						$(this).css('visibility', 'hidden');
						$('body').css('overflow', 'auto');	
					}
					
		});	

		$('#next_remotectrl_view').click(function(){
			$('#remotectrl_elec_view').find('.articles').scrollTop(0);
			$('#remotectrl_elec_view').css('visibility','visible');
			$('#remotectrl_view').css('visibility','hidden');
			$('body').css('overflow', 'hidden');
			
		});
		<!-- To quit the pop-up and reactivate the scrool -->
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
		});
	


});


