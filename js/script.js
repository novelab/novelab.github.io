jQuery(document).ready(function(){
	

$('#typerider_vimeo').css('display','none');
$('#chickendoom_vimeo').css('display','none');
$('#holyshield_vimeo').css('display','none');



	$('#typerider').click(function(){

		$('#typerider_view').css('visibility', 'visible');
		$('#typerider_vimeo').css('display','inline');

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
			
	});
	
		$('#typerider_view').click(function(){	
			$('#typerider_vimeo').css('display','none');
			$(this).css('visibility', 'hidden');	
			
		});

	$('#dentressengle').click(function(){
		$('#dentressengle_view').css('visibility', 'visible');
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
		$('#dentressengle_view').click(function(){		
			$(this).css('visibility', 'hidden');
		});

	$('#parvis').click(function(){
		$('#parvis_view').css('visibility', 'visible');
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
		$('#parvis_view').click(function(){	
			$(this).css('visibility', 'hidden');
		});

	$('#oculus').click(function(){
		$('#oculus_view').css('visibility', 'visible');
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
		$('#oculus_view').click(function(){	
			$(this).css('visibility', 'hidden');
		});

	$('#motorsmob').click(function(){
		$('#motorsmob_view').css('visibility', 'visible');
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
		$('#motorsmob_view').click(function(){	
			$(this).css('visibility', 'hidden');
		});

	$('#chickendoom').click(function(){
		$('#chickendoom_view').css('visibility', 'visible');
		$('#chickendoom_vimeo').css('display','inline');
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
		$('#chickendoom_view').click(function(){	
			$(this).css('visibility', 'hidden');
			$('#chickendoom_vimeo').css('display','none');
		});	

	$('#realhuman').click(function(){
		$('#realhuman_view').css('visibility', 'visible');
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
		$('#realhuman_view').click(function(){	
			$(this).css('visibility', 'hidden');
		});	
		

	$('#holyshield').click(function(){
		$('#holyshield_view').css('visibility', 'visible');
		$('#holyshield_vimeo').css('display','inline');
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
		$('#holyshield_view').click(function(){	
			$('#holyshield_vimeo').css('display','none');
			$(this).css('visibility', 'hidden');
		});			

	$('#custom_3D').click(function(){
		$('#custom_3D_view').css('visibility', 'visible');
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
		$('#custom_3D_view').click(function(){	
			$(this).css('visibility', 'hidden');
		});			


	$('#3D_scanning').click(function(){
		$('#3D_scanning_view').css('visibility', 'visible');
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
		$('#3D_scanning_view').click(function(){	
			$(this).css('visibility', 'hidden');
		});			


	$('#cardboard').click(function(){
			$('#cardboard_view').css('visibility', 'visible');
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
			$('#cardboard_view').click(function(){	
				$(this).css('visibility', 'hidden');
			});	
			
	$('#remotectrl').click(function(){
			$('#remotectrl_view').css('visibility', 'visible');
				$('#cardboard_view').css('visibility', 'hidden');
				$('#typerider_view').css('visibility', 'hidden');
				$('#parvis_view').css('visibility', 'hidden');
				$('#oculus_view').css('visibility', 'hidden');
				$('#motorsmob_view').css('visibility', 'hidden');
				$('#realhuman_view').css('visibility', 'hidden');
				$('#chickendoom_view').css('visibility', 'hidden');
				$('#custom_3D_view').css('visibility', 'hidden');
				$('#holyshield_view').css('visibility', 'hidden');
				
		});
			$('#remotectrl_view').click(function(){	
				$(this).css('visibility', 'hidden');
			});	


});


