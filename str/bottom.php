<?php

require '/php/setting.php';

echo '<section class="container">';

foreach ($css as $row) {
	if(!$row['img']){
		$row['img'] = '/img/rrr.jpg';
	}
	echo '<article class="container">
			<div class="row">
				<picture class="col-md-3">
					<a href="'.$row['link'].'" title="'.$row['title'].'">
						<img src="'.$row['img'].'" alt="'.$row['title'].'">
					</a>
				</picture>
				<div class="col-md-9">
					<h2><a href="'.$row['link'].'" title="'.$row['title'].'"></a></h2>
				</div>
			</div>
		</article>';
}
echo '</section>';
?>