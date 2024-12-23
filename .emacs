(add-to-list 'package-archives
             '("melpa" . "http://melpa.org/packages/"))

(add-to-list 'load-path "/home/abhinav/.config/emacs/neotree/")

(require 'spacious-padding)
(spacious-padding-mode 1)

(add-to-list 'load-path "~/.emacs.d/tokyonight-themes")
(require 'tokyonight-themes)
(load-theme 'tokyonight-storm :no-confirm)

;; Set the path to your todo.org file
(setq org-directory "~/org/todo.org") ; Adjust the path as needed

(require 'evil)
(evil-mode 1)
;; Function to open the todo.org file at startup
(defun open-todo-file ()
  "Open the org-mode TODO file at startup."
  (find-file org-directory))

;; Add the function to the window setup hook
(add-hook 'window-setup-hook 'open-todo-file)

;; Configure org-notify settings
(setq org-notify-activities '("TODO" "DEADLINE" "SCHEDULED"))
(setq org-notify-default-notifier "notify-send")  ;; Change to your notifier

;; Optionally, set up a function to load org-notify
(setq-default cursor-type 'bar)
(setq-default cursor-color "#bd93f9")

(defun setup-org-notify ()
  (org-notify-start))  ;; Starts org-notify

;; Enable Org mode for .org files
(add-to-list 'auto-mode-alist '("\\.org\\'" . org-mode))

;; Keybindings for Org mode
(global-set-key (kbd "C-c a") 'org-agenda)   ; Open the agenda
(global-set-key (kbd "C-c c") 'org-capture)   ; Quickly capture notes

;; Customize Org mode
(setq org-todo-keywords '((sequence "TODO" "IN-PROGRESS" "DONE")))
(setq org-hide-leading-stars t)  ; Hide leading asterisks in headings

;; Specify Org files for the agenda
(setq org-agenda-files '("~/org"))  ; Change to your Org files directory

;; Org capture templates
(setq org-capture-templates
      '(("t" "Todo" entry (file+headline "~/org/tasks.org" "Tasks")
	 "* TODO %?\n  %i\n  %a")))

(setq display-line-numbers 'relative)
(set-cursor-color "#f8f8f2") 
(setq-default cursor-type 'bar) 

(setq mode-line-format
      (list
       ;; buffer name
       " %b, "
       ;; line number
       "line %l "))

(menu-bar-mode 0)
(tool-bar-mode 0)
(scroll-bar-mode 0)

(global-set-key (kbd "C-<up>") 'windmove-up)
(global-set-key (kbd "C-<down>") 'windmove-down)
(global-set-key (kbd "C-<right>") 'windmove-right)
(global-set-key (kbd "C-<left>") 'windmove-left)

(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
;; Comment/uncomment this line to enable MELPA Stable if desired.  See `package-archive-priorities`
;; and `package-pinned-packages`. Most users will not need or want to do this.
;;(add-to-list 'package-archives '("melpa-stable" . "https://stable.melpa.org/packages/") t)
(package-initialize)
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-enabled-themes '(tokyonight-storm))
 '(custom-safe-themes
   '("456f5d8e224bc4bdceef65d00056f6f7c70d5972f7cbc046d1e39090c913ddf1" "98b4ef49c451350c28a8c20c35c4d2def5d0b8e5abbc962da498c423598a1cdd" "f366d4bc6d14dcac2963d45df51956b2409a15b770ec2f6d730e73ce0ca5c8a7" "7ea5be615e81d026891b41a53d304b0b6b285bd54153d62cd51f1794cd01fa72" "4cf3221feff536e2b3385209e9b9dc4c2e0818a69a1cdb4b522756bcdf4e00a4" "4aee8551b53a43a883cb0b7f3255d6859d766b6c5e14bcb01bed572fcbef4328" "51ec7bfa54adf5fff5d466248ea6431097f5a18224788d0bd7eb1257a4f7b773" "3e200d49451ec4b8baa068c989e7fba2a97646091fd555eca0ee5a1386d56077" "524fa911b70d6b94d71585c9f0c5966fe85fb3a9ddd635362bfabd1a7981a307" "efcecf09905ff85a7c80025551c657299a4d18c5fcfedd3b2f2b6287e4edd659" "57a29645c35ae5ce1660d5987d3da5869b048477a7801ce7ab57bfb25ce12d3e" "833ddce3314a4e28411edf3c6efde468f6f2616fc31e17a62587d6a9255f4633" "d89e15a34261019eec9072575d8a924185c27d3da64899905f8548cbd9491a36" "4c56af497ddf0e30f65a7232a8ee21b3d62a8c332c6b268c81e9ea99b11da0d3" "00445e6f15d31e9afaa23ed0d765850e9cd5e929be5e8e63b114a3346236c44c" "285d1bf306091644fb49993341e0ad8bafe57130d9981b680c1dbd974475c5c7" "7f1d414afda803f3244c6fb4c2c64bea44dac040ed3731ec9d75275b9e831fe5" "fee7287586b17efbfda432f05539b58e86e059e78006ce9237b8732fde991b4c" "7e5b48439116a276b8e9eef4024662522204a6519068f700e179bed3d0defec4" default))
 '(package-selected-packages
   '(spacious-padding nord-theme timu-spacegrey-theme org-notify projectile treemacs color-theme-sanityinc-solarized solarized-theme company zenburn-theme monokai-theme dracula-theme)))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(default ((t (:inherit nil :extend nil :stipple nil :background "#282a36" :foreground "#f8f8f2" :inverse-video nil :box nil :strike-through nil :overline nil :underline nil :slant normal :weight regular :height 120 :width normal :foundry "PfEd" :family "ProggyClean")))))
(add-hook 'after-init-hook 'global-company-mode)
(put 'upcase-region 'disabled nil)
