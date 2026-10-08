CREATE TABLE `attempts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`question` text NOT NULL,
	`answer` text NOT NULL,
	`correct` integer NOT NULL,
	`created_at` text NOT NULL,
	`seconds` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_attempts_user_date` ON `attempts` (`user_id`,`created_at`);