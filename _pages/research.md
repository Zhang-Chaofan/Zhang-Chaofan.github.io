---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

My research develops tactile intelligence for robots, spanning high-resolution tactile sensing, physically grounded tactile simulation, contact-aware manipulation, and multimodal foundation models. Publications are organized below by research direction.

<nav class="section-jump" aria-label="Research sections">
  <a href="#visuotactile-sensing">Tactile Sensing</a>
  <a href="#tactile-simulation">Simulation</a>
  <a href="#dexterous-manipulation">Manipulation</a>
  <a href="#tactile-foundation-models">Foundation Models</a>
</nav>

<section class="research-track" id="visuotactile-sensing">
  <header class="research-track__header">
    <h2>Visuotactile Sensing</h2>
    <p data-zh="研发用于机器人指尖的高分辨率、高精度视触觉传感器；研发用于捕捉人类操作技能并将其迁移至机器人的多维高分辨率可穿戴触觉指尖传感器；研发具备工具端位姿感知能力的柔性六维力/力矩传感器，作为机器人系统的通用接口，例如腕部力感知。">Develop high-resolution, high-precision visuotactile sensors for robotic fingertips; develop multidimensional, high-resolution wearable tactile fingertip sensors for capturing human manipulation skills and transferring them to robots; and develop soft six-axis force/torque sensors with tool-side pose sensing as versatile interfaces for robotic systems, such as wrist-mounted force sensing. </p>
  </header>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/gelstereo-2.jpg" alt="GelStereo 2.0 paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>GelStereo 2.0: An Improved GelStereo Sensor With Multimedium Refractive Stereo Calibration</h3>
      <p class="research-paper-card__authors"><strong>Chaofan Zhang</strong>, Shaowei Cui, Shuo Wang, Jingyi Hu, Yinghao Cai, Rui Wang, and Yu Wang</p>
      <p class="research-paper-card__venue">IEEE Transactions on Industrial Electronics, 71(7), 7452–7462, 2024</p>
      <div class="research-paper-card__links"><a href="https://doi.org/10.1109/TIE.2023.3312418" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="设计紧凑型双目视触觉传感器，实现高精度三维接触重建；">Compact stereo visuotactile sensor for high-precision 3D contact reconstruction.</li>
        <li data-zh="提出折射立体光线追踪（RSRT）模型，对传感器内部光线多介质传播过程进行物理建模；">Refractive stereo ray tracing (RSRT) model for physics-based modeling of light propagation through multiple media within the sensor. </li>
        <li data-zh="提出多重接触深度标定方法，提升整个传感器接触表面的重建精度。">Efficient multi-depth calibration improves reconstruction accuracy across the sensing surface.</li>
    </ul></div>
  </article>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/force-torque.jpg" alt="Six-axis force and torque estimation paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>Learning-Based Six-Axis Force/Torque Estimation Using GelStereo Fingertip Visuotactile Sensing</h3>
      <p class="research-paper-card__authors"><strong>Chaofan Zhang</strong>, Shaowei Cui, Yinghao Cai, Jingyi Hu, Rui Wang, and Shuo Wang</p>
      <p class="research-paper-card__venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 3651–3658, 2022</p>
      <div class="research-paper-card__links"><a href="https://doi.org/10.1109/IROS47612.2022.9981100" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="联合编码二维标记点运动与三维接触形变，实现六维力/力矩估计；">Jointly encodes 2D marker motion and 3D tactile deformation for six-axis force/torque sensing.</li>
        <li data-zh="提出接触位置编码，补偿不同接触位置带来的力学特性差异；">Contact positional encoding compensates for location-dependent force characteristics.</li>
        <li data-zh="基于 GelStereo 指尖实现实时力反馈自适应抓取。">Demonstrates real-time force-feedback adaptive grasping with GelStereo fingertips.</li>
    </ul></div>
  </article>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/spikingtac.jpg" alt="SpikingTac paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>SpikingTac: A Miniaturized Neuromorphic Visuotactile Sensor for High-Precision Dynamic Tactile Imprint Tracking</h3>
      <p class="research-paper-card__authors">Tianyu Jiang, <strong>Chaofan Zhang</strong>, Shaolin Zhang, Shaowei Cui, and Shuo Wang</p>
      <p class="research-paper-card__venue">IEEE Transactions on Industrial Electronics, 2026</p>
      <div class="research-paper-card__links"><a href="https://arxiv.org/abs/2602.23654" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="设计基于事件相机的紧凑型神经形态视触觉传感器；">Miniaturized standalone event-camera module enables compact neuromorphic tactile sensing.</li>
        <li data-zh="提出全局动态状态映射与去噪方法，支持高速触觉标记点跟踪；">Global dynamic state mapping and denoising support high-rate tactile imprint tracking.</li>
        <li data-zh="考虑迟滞的增量更新提高零点稳定性和动态精度。">Hysteresis-aware incremental updates improve zero-point stability and dynamic accuracy.</li>
    </ul></div>
  </article>
</section>

<section class="research-track" id="tactile-simulation">
  <header class="research-track__header">
    <h2>Tactile Simulation</h2>
    <p data-zh="研究基于接触形变映射的视触觉仿真方法，覆盖不同传感器几何结构、涂层和模式下的触觉信号。">Physics-based simulation of elastomer deformation and optical tactile rendering across sensor geometries, coatings, and output modalities.</p>
  </header>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/tacflex.jpg" alt="TacFlex paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>TacFlex: Multimode Tactile Imprints Simulation for Visuotactile Sensors With Coating Patterns</h3>
      <p class="research-paper-card__authors"><strong>Chaofan Zhang</strong>, Shaowei Cui, Jingyi Hu, Tianyu Jiang, Tiandong Zhang, Rui Wang, and Shuo Wang</p>
      <p class="research-paper-card__venue">IEEE Transactions on Robotics, 41, 3965–3985, 2025</p>
      <div class="research-paper-card__links">
        <a href="https://doi.org/10.1109/TRO.2025.3576970" target="_blank" rel="noopener">Paper</a>
        <a href="https://sites.google.com/view/tacflex" target="_blank" rel="noopener">Website</a>
        <a href="https://github.com/Zhang-Chaofan/TacFlex" target="_blank" rel="noopener">Code</a>
      </div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="将有限元形变与光学渲染相结合，实现物理可信的触觉仿真；">Couples finite-element deformation with optical rendering for physically grounded tactile simulation.</li>
        <li data-zh="支持多种类型的视触觉传感器，并集成多模式触觉信号；">Support multi-type visuotactile sensors and integrate multi-mode tactile imprints.</li>
        <li data-zh="支持可扩展的 Sim2Real 触觉感知与操作学习。">Generates multi-mode tactile imprints for scalable Sim2Real perception and manipulation learning.</li>
    </ul></div>
  </article>
</section>

<section class="research-track" id="dexterous-manipulation">
  <header class="research-track__header">
    <h2>Dexterous Manipulation with Vision and Touch</h2>
    <p data-zh="研发视触融合与技能学习方法，通过触觉感知提升机器人的精准灵巧操作能力。">Develop visual-tactile fusion and skill learning methods to enhance the robot's precise and dexterous manipulation capabilities through tactile perception.</p>
  </header>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/dextac.jpg" alt="DexTac paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>DexTac: Learning Contact-Aware Visuotactile Policies via Hand-by-Hand Teaching</h3>
      <p class="research-paper-card__authors">Xingyu Zhang, <strong>Chaofan Zhang</strong>, Boyue Zhang, Zhinan Peng, Shaowei Cui, and Shuo Wang</p>
      <p class="research-paper-card__venue">IEEE Transactions on Automation Science and Engineering, 23, 11171–11182, 2026</p>
      <div class="research-paper-card__links"><a href="https://arxiv.org/abs/2601.21474" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="通过手把手示教采集运动轨迹、力分布与空间接触区域；">Hand-by-hand teaching captures motion trajectories, force distributions, and spatial contact regions.</li>
        <li data-zh="提出接触感知策略学习方法，在复杂交互全过程中维持有效接触；">Contact-aware policy learning maintains effective contact throughout complex interactions.</li>
        <li data-zh="展示稳健的单手注射能力，包括使用小型注射器等高精度任务。">Demonstrates robust unimanual injection, including high-precision tasks with small syringes.</li>
    </ul></div>
  </article>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/sim-to-real-assembly.jpg" alt="Sim-to-real visual-tactile assembly paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>Sim-to-Real Assembly Learning Using Rich Visual–Tactile Perception</h3>
      <p class="research-paper-card__authors"><strong>Chaofan Zhang</strong>, Shaowei Cui, Xiaoge Cao, and Shuo Wang</p>
      <p class="research-paper-card__venue">IEEE Transactions on Industrial Informatics, 2026</p>
      <div class="research-paper-card__links"><a href="https://doi.org/10.1109/TII.2026.3704120" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="提出Oracle-to-embodiment 框架，将仿真中的特权知识迁移至真实世界的传感观测；">Oracle-to-embodiment framework transfers privileged simulation knowledge to real-world sensory observations.</li>
        <li data-zh="提出自适应门控机制，在不同装配阶段融合视觉与触觉信息；">Task-aware sensory gating adaptively fuses visual and tactile information across different assembly phases.</li>
        <li data-zh="在小间隙和未见条件下，实现数据高效的 Sim2Real 轴孔装配。">Enables data-efficient Sim2Real peg-in-hole insertion under tight clearances and unseen conditions.</li>
    </ul></div>
  </article>
</section>

<section class="research-track" id="tactile-foundation-models">
  <header class="research-track__header">
    <h2>Tactile Foundation Models</h2>
    <p data-zh="将触觉模态引入机器人操作多模态基础模型，以实现更泛化和更精确的操作。">Incorporate tactile modality into multimodal foundation models for robotic manipulation, enabling more generalizable and precise manipulation.</p>
  </header>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/vtla.jpg" alt="VTLA paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>VTLA: Vision-Tactile-Language-Action Model with Preference Learning for Insertion Manipulation</h3>
      <p class="research-paper-card__authors"><strong>Chaofan Zhang</strong>, Peng Hao, Xiaoge Cao, Xiaoshuai Hao, Shaowei Cui, and Shuo Wang</p>
      <p class="research-paper-card__venue">Biomimetic Intelligence and Robotics, 100333, 2026</p>
      <div class="research-paper-card__links">
        <a href="https://arxiv.org/abs/2505.09577" target="_blank" rel="noopener">Paper</a>
        <a href="https://sites.google.com/view/vtla" target="_blank" rel="noopener">Website</a>
      </div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="提出面向插装操作的视觉-触觉-语言-动作模型；">A Vision–Tactile–Language–Action model for insertion manipulation.</li>
        <li data-zh="监督微调+偏好学习提升连续控制与插装性能；">Preference learning enhances continuous control and insertion performance.</li>
	<li data-zh="使用 TacFlex 生成的仿真数据进行训练，并实现零样本 Sim2Real 迁移。">Uses exclusively TacFlex-generated simulation data for training and achieves zero-shot Sim2Real transfer.</li>
      </ul></div>
  </article>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/fg-cltp.jpg" alt="FG-CLTP paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>FG-CLTP: Fine-Grained Contrastive Language Tactile Pretraining for Robotic Manipulation</h3>
      <p class="research-paper-card__authors">Wenxuan Ma, <strong>Chaofan Zhang</strong>, Yinghao Cai, Guocai Yao, Shaowei Cui, and Shuo Wang</p>
      <p class="research-paper-card__venue">IEEE Robotics and Automation Letters, 11(9), 2026</p>
      <div class="research-paper-card__links"><a href="https://arxiv.org/abs/2603.10871" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="将触觉信号与细粒度三维接触状态的语言描述对齐，而非粗粒度语义标签；">Aligns tactile signals with language descriptions of fine-grained 3D contact states rather than coarse semantic labels.</li>
        <li data-zh="采用离散化数值词元保留可测量的接触几何；">Discretized numerical tokens preserve measurable contact geometry and force-related structure.</li>
        <li data-zh="支持跨传感器触觉表征与触觉-语言-动作策略学习。">Supports sensor-general tactile representations and tactile-language-action policy learning.</li>
    </ul></div>
  </article>

  <article class="research-paper-card">
    <div class="research-paper-card__media"><img src="{{ base_path }}/images/research-papers/feelworld.jpg" alt="FeelWorld paper preview" loading="lazy"></div>
    <div class="research-paper-card__content">
      <h3>FeelWorld: Visuo-Tactile World Model for Hierarchical Contact Prediction and Planning</h3>
      <p class="research-paper-card__authors">Wenxuan Ma, <strong>Chaofan Zhang</strong>, Chao Xue, Yinghao Cai, Guocai Yao, Shaowei Cui, and Shuo Wang</p>
      <p class="research-paper-card__venue">arXiv preprint arXiv:2607.24267, 2026</p>
      <div class="research-paper-card__links"><a href="https://arxiv.org/abs/2607.24267" target="_blank" rel="noopener">Paper</a></div>
    </div>
    <div class="research-paper-card__keypoints"><span>Keypoints</span><ul>
        <li data-zh="联合预测视觉潜变量和层级触觉状态：接触状态、三维触觉状态与滑移；">Jointly predicts visual latents and hierarchical tactile states: contact, 3D tactile state, and slip.</li>
        <li data-zh="提出接触门控的非对称注意力机制，在接触前保留视觉预测，并在需要时激活触觉融合；">Contact-gated asymmetric attention preserves visual prediction before contact and activates tactile fusion when needed.</li>
        <li data-zh="所预测的接触与滑移状态支持抓取和插装任务的 CEM 规划。">Predicted contact and slip states support contact-aware CEM planning for grasping and insertion.</li>
    </ul></div>
  </article>
</section>
