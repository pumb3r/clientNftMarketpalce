import React, { Component } from 'react';
import Image from '../components/img/main.png';
import top from '../components/img/top.jpg';
import music from '../components/img/music.jpg';
import sport from '../components/img/sport.jpg';
import art from '../components/img/art.jpg';
import untility from '../components/img/untility.jpg';
import virtualworld from '../components/img/virtualworld.jpg';
import { Link } from 'react-router-dom';
import { SHOPPAGE_ROUTE } from '../untils/consts';

const MainPage = () => {
  return (
    <div class="wrapper">
      <main class="page">
        <section class="information">
          <div class="information__container _container">
            <div class="information__mainblock">
              <div class="information__aboutit aboutit">
                <div class="aboutit__title">Discover, collect, and sell extraordinary NFTs</div>
                <div class="aboutit__subtitle">
                  Explore the upcoming NFT projects, get all the info you need to help you decide if
                  that is the right project for you. Don’t forget to check the additional info in
                  the project page, including relevant tips per project.
                </div>
                <div class="aboutit__buttons">
                  <a href="#" class="create-button">
                    Create
                  </a>
                  <a href="#" class="connect-button">
                    Connect
                  </a>
                </div>
              </div>
              <div class="information__image">
                <img src={Image} alt="informationimage" />
              </div>
            </div>
          </div>
        </section>
        <section class="selectcategories">
          <div class="selectcategories__container _container">
            <div class="selectcategories__info">
              <div class="aboutit__title">Browse by category</div>
              <div class="aboutit__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="selectcategories__collection">
              <ul class="selectcategories__menu menu-selectcategories">
                <Link to={SHOPPAGE_ROUTE} class="menu-selectcategories__body">
                  <img src={top} class="menu-selectcategories__image" alt="" />
                  <li class="menu-selectcategories__item">Top</li>
                </Link>
                <Link to={SHOPPAGE_ROUTE} class="menu-selectcategories__body">
                  <img src={art} class="menu-selectcategories__image" alt="" />
                  <li class="menu-selectcategories__item">Art</li>
                </Link>
                <Link to={SHOPPAGE_ROUTE} class="menu-selectcategories__body">
                  <img src={untility} class="menu-selectcategories__image" alt="" />
                  <li class="menu-selectcategories__item">Utility</li>
                </Link>
                <Link to={SHOPPAGE_ROUTE} class="menu-selectcategories__body">
                  <img src={music} class="menu-selectcategories__image" alt="" />
                  <li class="menu-selectcategories__item">Music</li>
                </Link>
                <Link to={SHOPPAGE_ROUTE} class="menu-selectcategories__body">
                  <img src={sport} class="menu-selectcategories__image" alt="" />
                  <li class="menu-selectcategories__item">Sports</li>
                </Link>
                <Link to={SHOPPAGE_ROUTE} class="menu-selectcategories__body">
                  <img src={virtualworld} class="menu-selectcategories__image" alt="" />
                  <li class="menu-selectcategories__item">Virtual Worlds</li>
                </Link>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
