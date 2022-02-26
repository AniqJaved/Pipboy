$(document).ready(function(){
  var weapons = [
    {
      "name": "44_pistol",
      "ammo": 15,
      "damage": 48,
      "firerate": 6,
      "range": 119,
      "accuracy": 66,
      "weight": 4.3,
      "value": 99,

    },
    {
      "name": "9mm_pistol",
      "ammo": 25,
      "damage": 50,
      "firerate": 10,
      "range": 100,
      "accuracy": 78,
      "weight": 2.4,
      "value": 90,
    },
    {
      "name": "assault_rifle",
      "ammo": 150,
      "damage": 56,
      "firerate": 25,
      "range": 299,
      "accuracy": 23,
      "weight": 8,
      "value": 78,
    }];

    $('.item-list a').on('click' , function(e){
      $('.item-list a').removeClass('active');
      $(e.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseenter',function(e){
      var  current_item = $(e.currentTarget).attr('class');
      console.log(current_item);
      for(item in weapons){
        if(weapons[item].name == current_item){
          console.log(weapons[item]);
          var container= $('.item-stats');
          container.find('.damage').html(weapons[item].damage);
          container.find('.firerate').html(weapons[item].firerate);
          container.find('.range').html(weapons[item].range);
          container.find('.accuracy').html(weapons[item].accuracy);
          container.find('.weight').html(weapons[item].weight);
          container.find('.ammo').html(weapons[item].ammo);
          container.find('.value').html(weapons[item].value);

        }
      }
    });
});
